import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import companyRoutes from "./routes/companyRoutes";
import newsRoutes from "./routes/newsRoutes";

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

// Middleware
app.use(cors()); // Allow requests from any origin
app.use(express.json());

// Routes
app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Welcome to Akinia API",
    status: "active",
    timestamp: new Date().toISOString(),
  });
});

// API Routes
app.use("/api/companies", companyRoutes);
app.use("/api/news", newsRoutes);

// Start server
app.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});
