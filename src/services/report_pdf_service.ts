import { PrismaClient } from "../../generated/prisma";
import { generatePDF } from "./pdf/order_report_pdf";
import MailSender from "./mail/mail_service";

interface ReportRequest {
  cnpj: string;
  categoria: string;
  opcao: string;
}

class OrderReportService {
  private prisma: PrismaClient;
  private userData: any;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async execute({ cnpj, categoria, opcao }: ReportRequest): Promise<any> {
    if (!cnpj || !categoria || !opcao) {
      throw new Error(
        `Todos os campos devem ser preenchidos\ncnpj:${cnpj}\ncategoria:${categoria}\nopção:${opcao}.`
        
      );
    }

    if (categoria !== "C" && categoria !== "R") {
      throw new Error("Categoria inválida.");
    }

    if (opcao !== "D" && opcao !== "E") {
      throw new Error("Opção inválida.");
    }

    const whereCondition = categoria === "C" ? { cnpj_cli: cnpj } : { cnpj_rep: cnpj };

    try {
      const pedidos = await this.prisma.pedido.findMany({
        where: whereCondition,
        include: {
          PedidoProduto: {
            include: {
              Produto: {
                include: {
                  Marca: true,
                },
              },
            },
          },
          Cliente: true,
          Representante: true,
        },
        orderBy: {
          data_pedido: 'desc',
        },
      });

      if (categoria === "C") {
        this.userData = await this.prisma.cliente.findFirst({
          where: {
            cnpj: cnpj,
          },
        });
      } else {
        this.userData = await this.prisma.representante.findFirst({
          where: {
            cnpj: cnpj,
          },
        });
      }

      const pdfBuffer = await generatePDF(pedidos, categoria);

      if (opcao === "D") {
        return { pdfBuffer };
      } else {
        const subject = "Relatório de vendas";
        const text = `Segue abaixo o relatório de vendas da ${this.userData.razao_social}`;

        try {
          await MailSender.sendMail(this.userData.email, subject, text, [
            { filename: "relatorio.pdf", content: pdfBuffer },
          ]);
          return { message: "Relatório enviado para o email com sucesso." };
        } catch (error) {
          throw new Error(`Erro ao enviar o relatório: ${error}`);
        }
      }
    } catch (error) {
      throw new Error(`Erro ao buscar pedidos: ${error}`);
    }
  }
}

export { OrderReportService };
