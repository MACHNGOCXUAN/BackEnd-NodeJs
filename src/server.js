require("dotenv").config();

const express = require('express');
const path=require("path");
const configViewEngine=require("./config/viewEngine");
const webRouter = require("./router/web");

const app = express()
const port = process.env.PORT ||6969;
const hostname=process.env.HOST_NAME;

configViewEngine(app);
app.use("/",webRouter);


app.listen(port,hostname, () => {
  console.log(`Example app listening on port ${port}`)
})