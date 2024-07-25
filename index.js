const express = require("express");
const mongo = require("mongoose");
const productRouter = require("./route/product.router");

// middlewares
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routing
app.use("/api/products", productRouter);

// testing
app.get("/", (req, res) => {
  res.send("Hello RIDICULES!");
});

/* providing a mongoDB URI that connects us to the cluster,
then we connect to the database using our string token, and then, we start the
express server*/
const PORT = 9000;
const mongoURI =
  "mongodb+srv://admin:yaya@node.w2lf9wd.mongodb.net/?retryWrites=true&w=majority&appName=node";
mongo
  .connect(mongoURI)
  .then(() => {
    console.log("connected to db");
    app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}!`);
    });
  })
  .catch(() => {
    console.log("not connected to db");
  });
