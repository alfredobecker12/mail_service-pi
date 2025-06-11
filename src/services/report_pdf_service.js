"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderReportService = void 0;
const prisma_1 = require("../../../generated/prisma");
const order_report_pdf_1 = require("./pdf/order_report_pdf");
const mail_service_1 = __importDefault(require("./mail/mail_service"));
class OrderReportService {
    constructor() {
        this.prisma = new prisma_1.PrismaClient();
    }
    async execute({ cnpj, categoria, opcao }) {
        if (!cnpj || !categoria || !opcao) {
            throw new Error(`Todos os campos devem ser preenchidos\ncnpj:${cnpj}\ncategoria:${categoria}\nopção:${opcao}.`);
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
            }
            else {
                this.userData = await this.prisma.representante.findFirst({
                    where: {
                        cnpj: cnpj,
                    },
                });
            }
            const pdfBuffer = await (0, order_report_pdf_1.generatePDF)(pedidos, categoria);
            if (opcao === "D") {
                return { pdfBuffer };
            }
            else {
                const subject = "Relatório de vendas";
                const text = `Segue abaixo o relatório de vendas da ${this.userData.razao_social}`;
                try {
                    await mail_service_1.default.sendMail(this.userData.email, subject, text, [
                        { filename: "relatorio.pdf", content: pdfBuffer },
                    ]);
                    return { message: "Relatório enviado para o email com sucesso." };
                }
                catch (error) {
                    throw new Error(`Erro ao enviar o relatório: ${error}`);
                }
            }
        }
        catch (error) {
            throw new Error(`Erro ao buscar pedidos: ${error}`);
        }
    }
}
exports.OrderReportService = OrderReportService;
