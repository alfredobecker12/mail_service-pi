"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePDF = generatePDF;
const pdfkit_1 = __importDefault(require("pdfkit"));
const fs_1 = __importDefault(require("fs"));
async function generatePDF(pedidos, categoria, filePath) {
    try {
        const doc = new pdfkit_1.default();
        const buffers = [];
        doc.on("data", buffers.push.bind(buffers));
        doc.on("end", () => {
            const pdfBuffer = Buffer.concat(buffers);
            if (filePath) {
                fs_1.default.writeFileSync(filePath, pdfBuffer);
            }
        });
        const tituloRelatorio = categoria === "C" ? "Compras" : "Vendas";
        // Formatação data
        const options = {
            day: "2-digit",
            month: "2-digit",
            year: "2-digit",
        };
        doc
            .fontSize(25)
            .text(`Relatório de ${tituloRelatorio}`, { align: "center" });
        doc
            .fontSize(12)
            .text(`Data: ${new Date().toLocaleDateString("pt-BR", options)}`, {
            align: "right",
        });
        doc.moveDown();
        // Pedidos
        pedidos.forEach((pedido, index) => {
            doc.fontSize(16).text(`Pedido ${index + 1}`, { align: "left" });
            doc
                .fontSize(14)
                .text(`Data do Pedido: ${pedido.data_pedido.toLocaleDateString()}`);
            doc.fontSize(14).text(`CNPJ Cliente: ${pedido.cnpj_cli}`);
            doc
                .fontSize(14)
                .text(`Razão Social Cliente: ${pedido.Cliente.razao_social}`);
            doc.fontSize(14).text(`CNPJ Representante: ${pedido.cnpj_rep}`);
            doc
                .fontSize(14)
                .text(`Razão Social Representante: ${pedido.Representante.razao_social}`);
            doc.fontSize(14).text(`Valor Total: R$ ${pedido.valor_total.toFixed(2)}`);
            doc.moveDown();
            pedido.PedidoProduto.forEach((item, idx) => {
                doc
                    .fontSize(12)
                    .text(`  Produto ${idx + 1}: ${item.Produto.descricao}`);
                doc.fontSize(12).text(`  Quantidade: ${item.quantidade}`);
                doc.fontSize(12).text(`  Preço: R$ ${item.Produto.preco.toFixed(2)}`);
                doc.fontSize(12).text(`  Marca: ${item.Produto.Marca.razao_social}`);
                doc.moveDown();
            });
            doc
                .moveDown()
                .text("----------------------------------------", { align: "center" });
            doc.moveDown();
        });
        doc.end();
        return new Promise((resolve, reject) => {
            doc.on("end", () => resolve(Buffer.concat(buffers)));
            doc.on("error", reject);
        });
    }
    catch (error) {
        throw new Error(`Erro ao gerar o PDF: ${error}`);
    }
}
//# sourceMappingURL=order_report_pdf.js.map