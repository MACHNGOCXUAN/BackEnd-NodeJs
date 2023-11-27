const mysql=require("mysql2/promise");


// const connetion=mysql.createConnection({
//     host:"localhost",
//     port:3307,
//     user:"root",
//     password:"123456",
//     database:"XuanIT"
//   });

  const connetion = mysql.createPool({
    host:"localhost",
    port:3307,
    user:"root",
    password:"123456",
    database:"XuanIT",
    waitForConnections :true,
    connectionLimit:10,
    queueLimit:0
  })

  module.exports=connetion;