"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailOrderController = void 0;
const mail_order_service_1 = require("../services/mail_order_service");
class MailOrderController {
    async handle(req, res, next) {
        console.log("MAIL ORDER");
        try {
            const { id_pedido } = req.body;
            if (!id_pedido) {
                return res.status(400).json({ error: "ID do pedido é obrigatório" });
            }
            const sendOrderService = new mail_order_service_1.SendOrderService();
            await sendOrderService.execute({ id_pedido });
            res.json({ message: "Email enviado com sucesso" });
        }
        catch (error) {
            console.error("Erro ao enviar email:", error);
            res.status(500).json({ error: "Erro ao enviar email" });
        }
    }
}
exports.MailOrderController = MailOrderController;
//# sourceMappingURL=mail_order_controller.js.map