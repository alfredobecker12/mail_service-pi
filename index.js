"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const router_1 = __importDefault(require("./src/router"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(router_1.default);
// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});
// Export as Vercel handler
exports.default = (req, res) => {
    app(req, res);
};
