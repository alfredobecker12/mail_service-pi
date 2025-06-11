"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class MailSender {
    constructor() {
        if (!process.env.USER || !process.env.USER_PASS) {
            throw new Error("As variáveis de ambiente USER e USER_PASS devem estar definidas.");
        }
        this.transporter = nodemailer_1.default.createTransport({
            service: "gmail",
            auth: {
                user: process.env.USER,
                pass: process.env.USER_PASS,
            },
        });
    }
    async sendMail(to, subject, text, attachments) {
        const mailOptions = {
            from: {
                name: "Repnet",
                address: process.env.USER,
            },
            to,
            subject,
            text,
            attachments, // Anexos
        };
        try {
            const info = await this.transporter.sendMail(mailOptions);
            return info;
        }
        catch (error) {
            throw new Error("Erro ao enviar email");
        }
    }
}
exports.default = new MailSender();
//# sourceMappingURL=mail_service.js.map