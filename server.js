require("dotenv").config();
const express = require("express");
const app = express();
const route= require("./router/auth-router")

const connectDb = require("./utils/db")


app.use(express.json());

app.use("/api/auth", route)

const PORT= 5000;


connectDb().then(()=>{

    app.listen(PORT,()=>{
        console.log(`server is running port:${PORT}`)
})


})




