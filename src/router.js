"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const report_pdf_controller_1 = require("./controller/report_pdf_controller");
const mail_order_controller_1 = require("./controller/mail_order_controller");
const router = express_1.default.Router();
// Debug middleware
router.use((req, res, next) => {
    console.log(`[Router] ${req.method} ${req.url}`);
    next();
});
router.get("/", async (req, res, next) => {
    console.log("Hello World");
    res.send("Hello World");
});
// Report routes
router.get("/report/order", async (req, res, next) => {
    console.log("[Router] Processing mail order request with params:", req.query);
    const controller = new mail_order_controller_1.MailOrderController();
    await controller.handle(req, res, next);
});
router.post("/report/order/pdf", async (req, res, next) => {
    console.log("[Router] Processing PDF report request with params:", req.query);
    const controller = new report_pdf_controller_1.OrderReportController();
    await controller.handle(req, res, next);
});
exports.default = router;
