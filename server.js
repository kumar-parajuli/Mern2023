require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const errorMiddleware = require("./middlewares/error-middleware");
const connectDb = require("./utils/db");

// handeling cors issue
const corsOptions = {
  origin: "http://localhost:3000",
  method: "GET,POST,PUT,DELETE,PATCH,HEAD",
  credentials: true,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));
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
