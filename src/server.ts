import express from "express";
import dotenv from "dotenv";
import router from "./router";

dotenv.config();

const app = express();
const port = 3030;

app.use(express.json());

// Debug middleware
app.use((req, res, next) => {
  console.log(`[Server] ${req.method} ${req.url}`);
  next();
});

// Mount router at root
app.use(router);

// 404 handler
app.use((req, res) => {
  console.log(`[Server] Route not found: ${req.method} ${req.url}`);
  res.status(404).json({ error: "Route not found" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
