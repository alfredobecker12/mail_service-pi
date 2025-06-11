"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendOrderService = void 0;
const prisma_client_1 = __importDefault(require("../prisma/prisma_client"));
const mail_service_1 = __importDefault(require("./mail/mail_service"));
class SendOrderService {
    async execute({ id_pedido }) {
        try {
            console.log("Buscando pedido no banco de dados");
            const pedidoData = await prisma_client_1.default.pedido.findFirst({
                where: { id: id_pedido },
                select: {
                    cnpj_cli: true,
                    cnpj_rep: true,
                    valor_total: true,
                    PedidoProduto: {
                        select: {
                            quantidade: true,
                            Produto: {
                                select: {
                                    descricao: true,
                                    preco: true,
                                },
                            },
                        },
                    },
                },
            });
            if (!pedidoData) {
                throw new Error("Pedido não encontrado");
            }
            const clientData = await prisma_client_1.default.cliente.findFirst({
                where: { cnpj: pedidoData.cnpj_cli },
            });
            if (!clientData) {
                throw new Error("Cliente não encontrado");
            }
            const repData = await prisma_client_1.default.representante.findFirst({
                where: { cnpj: pedidoData.cnpj_rep },
            });
            if (!repData) {
                throw new Error("Representante não encontrado");
            }
            // Formatação do valor total para "R$50.000,00"
            const formattedValorTotal = pedidoData.valor_total.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
            });
            // Construção dos detalhes do pedido
            const pedidoDetalhes = pedidoData.PedidoProduto
                .map((item) => `
        Produto: ${item.Produto.descricao}
        Quantidade: ${item.quantidade}
        Preço Unitário: R$${item.Produto.preco.toLocaleString("pt-BR")}
        `)
                .join("\n");
            const subject = `Pedido realizado por ${clientData.razao_social}`;
            const text = `Olá ${repData.razao_social},

      Um novo pedido foi realizado pelo cliente ${clientData.razao_social}.

      Detalhes do pedido:
      ID do Pedido: ${id_pedido}
      CNPJ do Cliente: ${pedidoData.cnpj_cli}
      CNPJ do Representante: ${pedidoData.cnpj_rep}
      Valor Total: ${formattedValorTotal}

      Itens do Pedido:
      ${pedidoDetalhes}

      Atenciosamente,
      Equipe Repnet`;
            // Enviar o e-mail
            console.log("Enviando email para o representante e cliente");
            await mail_service_1.default.sendMail([repData.email, clientData.email], subject, text);
            console.log("Email enviado com sucesso");
            return;
        }
        catch (error) {
            throw new Error("Erro ao enviar email");
        }
    }
}
exports.SendOrderService = SendOrderService;
