/**
 * Initializes an Express server with MongoDB connection and necessary middlewares.
 *
 * Middleware:
 * - express.json() for parsing JSON bodies
 * - express.urlencoded() for parsing URL-encoded bodies
 * - helmet() for enhancing security by setting various HTTP headers
 *
 * Error Handling:
 * - Logs the error stack and sends a 500 status with a message "Something broke!" in case of an error
 *
 * Routes:
 * - "/api/products" route is handled by the productRouter
 * - "/" route responds with "Hello RIDICULES!"
 *
 * Database Connection:
 * - Connects to the MongoDB cluster using the provided URI
 * - Starts the Express server on the specified PORT after successful database connection
 * - Logs the connection status or error messages accordingly
 */

const express = require("express");
const mongo = require("mongoose");
const helmet = require("helmet");
const productRouter = require("./route/product.router");

// middlewares
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet()); // Using helmet middleware for security

// routing
app.use("/api/products", productRouter);

// for test : navigate to http://localhost:PORT after starting the server
app.get("/", (req, res) => {
  res.send("Hello RIDICULES!");
});

require("dotenv").config();
const PORT = process.env.PORT;
const mongoURI = process.env.MONGO_URI;

mongo
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
