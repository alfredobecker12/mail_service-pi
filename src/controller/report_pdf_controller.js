"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderReportController = void 0;
const report_pdf_service_1 = require("../services/report_pdf_service");
class OrderReportController {
    async handle(req, res, next) {
        try {
            const { cnpj, categoria, opcao } = req.method === "GET" ? req.query : req.body;
            if (!cnpj || !categoria || !opcao) {
                return res.status(400).json({
                    error: "Parâmetros obrigatórios: cnpj, categoria e opcao"
                });
            }
            const orderReportService = new report_pdf_service_1.OrderReportService();
            const result = await orderReportService.execute({
                cnpj: String(cnpj),
                categoria: String(categoria),
                opcao: String(opcao)
            });
            if (result.pdfBuffer) {
                res.setHeader("Content-Type", "application/pdf");
                res.setHeader("Content-Disposition", "attachment; filename=relatorio-pedidos.pdf");
                return res.send(result.pdfBuffer);
            }
            return res.json(result);
        }
        catch (error) {
            next(error);
        }
    }
}
exports.OrderReportController = OrderReportController;
