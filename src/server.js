require("dotenv").config();

const express = require('express');
const path=require("path");
const configViewEngine=require("./config/viewEngine");
const webRouter = require("./router/web");
const mysql=require("mysql2");
const { error } = require("console");

const app = express()
const port = process.env.PORT ||6969;
const hostname=process.env.HOST_NAME;

configViewEngine(app);
app.use("/",webRouter);

const connetion=mysql.createConnection({
  host:"localhost",
  port:3307,
  user:"root",
  password:"123456",
  database:"XuanIT"
});

connetion.query(
  "select * from Users",
  (err,results,fields)=>{
    console.log("results=",results);
    console.log("fields=",fields);
  }
)


app.listen(port,hostname, () => {
  console.log(`Example app listening on port ${port}`)
})