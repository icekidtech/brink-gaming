import { AppDataSource } from "./config/db";
import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Initialization
AppDataSource.initialize()
  .then(() => {
    console.log("Database connected successfully!");
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to BRINK||GAMING Backend!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});