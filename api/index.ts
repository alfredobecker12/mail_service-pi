import express from "express";
import router from "../src/router";
import { VercelRequest, VercelResponse } from '@vercel/node';

const app = express();
app.use(express.json());
app.use(router);

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

export default (req: VercelRequest, res: VercelResponse) => {
  app(req, res);
};