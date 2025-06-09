import { Request, Response, NextFunction } from "express";
import { SendOrderService } from "../services/mail_order_service";

class MailOrderController {
  async handle(req: Request, res: Response, next: NextFunction) {
    console.log("MAIL ORDER");
    try {
      const { id_pedido } = req.body;

      if (!id_pedido) {
        return res.status(400).json({ error: "ID do pedido é obrigatório" });
      }

      const sendOrderService = new SendOrderService();
      await sendOrderService.execute({ id_pedido });

      res.json({ message: "Email enviado com sucesso" });
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      res.status(500).json({ error: "Erro ao enviar email" });
    }
  }
}

export { MailOrderController };
