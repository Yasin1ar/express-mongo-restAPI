/**
 * Express Application Entry Point
 * 
 * This is the main application file that configures and initializes the Express server.
 * It sets up middleware, connects to MongoDB, and defines API routes.
 * 
 * Configuration:
 * - Environment variables loaded from .env file
 * - Required variables: MONGO_URI, PORT (optional, defaults to 3000)
 * 
 * Features:
 * - Express middleware for JSON parsing and URL encoding
 * - Helmet for enhanced API security
 * - MongoDB connection with Mongoose
 * - Product API routes
 * 
 * @module app
*/

import express, { Request, Response, NextFunction, Application } from "express";
import mongoose from "mongoose";
import helmet from "helmet";
import dotenv from "dotenv";
import morgan from "morgan";
import productRouter from "./routes/product.routes";

// Load environment variables
dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || "3000";
const mongoURI = process.env.MONGO_URI;

// Check if required environment variables are defined
if (!mongoURI) {
  console.error("MONGO_URI is not defined in environment variables");
  process.exit(1);
}

// Configure middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet()); // Security middleware
app.use(morgan('combined')); // Request logging

// Register routes
app.use("/api/products", productRouter);

// Global error handling middleware
app.use((err: Error & { status?: number }, req: Request, res: Response, next: NextFunction) => {
  res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
});

// Connect to database and start server
mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("CONNECTED TO DB");
    const server = app.listen(PORT, () => {
      console.log(`SERVER IS RUNNING ON PORT ${PORT}!`);
    });
    
    // Graceful shutdown handling
    process.on('SIGTERM', () => {
      console.log('SIGTERM signal received: closing HTTP server and DB connections');
      server.close(() => {
        mongoose.connection.close();
        console.log('HTTP server and DB connections closed');
      });
    });
  })
  .catch((error) => {
    console.error("ERROR CONNECTING TO THE DATABASE:", error);
    console.log("NOT CONNECTED TO DB");
  });

export default app;