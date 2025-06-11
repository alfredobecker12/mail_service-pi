import express from "express";
import { OrderReportController } from "./controller/report_pdf_controller";
import { MailOrderController } from "./controller/mail_order_controller";

const router = express.Router();

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
  const controller = new MailOrderController();
  await controller.handle(req, res, next);
});

router.post("/report/order/pdf", async (req, res, next) => {
  console.log("[Router] Processing PDF report request with params:", req.query);
  const controller = new OrderReportController();
  await controller.handle(req, res, next);
});

export default router;
