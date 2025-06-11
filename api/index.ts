import express from "express";
import dotenv from "dotenv";
import router from "./src/router";
import { VercelRequest, VercelResponse } from '@vercel/node';

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

// Export the Express app as a Vercel-compatible handler
export default (req: VercelRequest, res: VercelResponse) => {
  app(req, res);
};

// Start the server if not running on Vercel
if (process.env.NODE_ENV !== 'production') {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}
