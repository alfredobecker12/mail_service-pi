import express from "express";
import dotenv from "dotenv";
import router from "./src/router";
import { VercelRequest, VercelResponse } from '@vercel/node';

dotenv.config();

const app = express();
app.use(express.json());
app.use(router);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Export as Vercel handler
export default (req: VercelRequest, res: VercelResponse) => {
  app(req, res);
};