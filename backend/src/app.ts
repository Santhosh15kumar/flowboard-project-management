import express from "express";
import cors from "cors";
import helmet from "helmet";

const app = express();

// Security middleware
app.use(helmet());

// Enable cross-origin requests
app.use(cors());

// Parse incoming JSON requests
app.use(express.json());

// Health-check endpoint
app.get("/api/health", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "FlowBoard API is running",
    timestamp: new Date().toISOString(),
  });
});

export default app;
