require("dotenv").config();
const express = require("express");
const app = express();
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const errorMiddleware = require("./middlewares/error-middleware");

const connectDb = require("./utils/db");

app.use(express.json());

//for route path api
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);

//error middleware for handle errors
app.use(errorMiddleware);

const PORT = 5000;
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running port:${PORT}`);
  });
});
