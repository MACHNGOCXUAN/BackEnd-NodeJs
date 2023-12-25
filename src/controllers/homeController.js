const connetion = require("../config/database");
const {
  getAllUsers,
  getByID,
  getUpdate,
  getDelete,
} = require("../services/CRUD");

const viewCreate = (req, res) => {
  res.render("InsertSQL");
};

//cach 1
// const viewHome=async (req,res)=>{
//     let [results,fields]= await connetion.query(
//         `select * from Users`
//     )
//     console.log(results);
//     return res.render("home.ejs",{data: results});
//}
//cach 2
const viewHome = async (req, res) => {
  const results = await getAllUsers();
  return res.render("home.ejs", { data: results });
};

// const getSelect= async (req,res)=>{
//     let [results,fields]=await connetion.query(
//         `select * from Users`
//     )
//     res.send("Thanh cong");
// }

const getCreateUser = async (req, res) => {
  let mssv = req.body.ID;
  let myName = req.body.EMAIL;
  let myTuoi = req.body.NAME;
  let myDiaChi = req.body.CITY;

  let [results, fields] = await connetion.query(
    `insert Users values(?,?,?,?)`,
    [mssv, myName, myTuoi, myDiaChi]
  );
  res.send("Them thanh cong");
};

const viewUpdate = async (req, res) => {
  let userid = req.params.ID;
  let user = await getByID(userid);
  res.render("Update.ejs", { editUser: user });
};

const UpdateUser = async (req, res) => {
  let mssv = req.body.ID;
  let myName = req.body.EMAIL;
  let myTuoi = req.body.NAME;
  let myDiaChi = req.body.CITY;

  await getUpdate(mssv, myName, myTuoi, myDiaChi);
  res.redirect("/home");
};

const viewDelete = async (req, res) => {
  let userid = req.params.ID;
  let user = await getByID(userid);
  res.render("delete.ejs", { editUser: user });
};

const DeleteUser = async (req, res) => {
  let id = req.body.ID;
  await getDelete(id);
  res.redirect("/home");
};

module.exports = {
  getCreateUser,
  viewCreate,
  viewHome,
  viewUpdate,
  UpdateUser,
  viewDelete,
  DeleteUser,
};
