import { Request, Response, NextFunction } from "express";
import { OrderReportService } from "../services/report_pdf_service";

class OrderReportController {
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const { cnpj, categoria, opcao } = req.method === "GET" ? req.query : req.body;
      
      if (!cnpj || !categoria || !opcao) {
        return res.status(400).json({
          error: "Parâmetros obrigatórios: cnpj, categoria e opcao"
        });
      }

      const orderReportService = new OrderReportService();
      const result = await orderReportService.execute({
        cnpj: String(cnpj),
        categoria: String(categoria),
        opcao: String(opcao)
      });

      if (result.pdfBuffer) {
        res.setHeader("Content-Type", "application/pdf");
        res.setHeader(
          "Content-Disposition",
          "attachment; filename=relatorio-pedidos.pdf"
        );
        return res.send(result.pdfBuffer);
      }

      return res.json(result);
    } catch (error) {
      next(error);
    }
  }
}

export { OrderReportController }; 