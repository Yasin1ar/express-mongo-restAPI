import express, { Request, Response } from "express";
import mongoose from "mongoose";
import helmet from "helmet";
import dotenv from "dotenv";
import productRouter from "./routes/product.routes";

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 9000;
const mongoURI = process.env.MONGO_URI || "";

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet()); // Security middleware

// Routes
app.use("/api/products", productRouter);

// Test route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello RIDICULES!");
});

// Database Connection
mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("CONNECTED TO DB");
    app.listen(PORT, () => {
      console.log(`SERVER IS RUNNING ON PORT ${PORT}!`);
    });
  })
  .catch((error) => {
    console.error("ERROR CONNECTING TO THE DATABASE:", error);
    console.log("NOT CONNECTED TO DB");
  });

export default app;
