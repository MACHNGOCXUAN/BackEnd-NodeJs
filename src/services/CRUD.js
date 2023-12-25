const connetion = require("../config/database");

const getAllUsers = async () => {
  let [ruselts, fields] = await connetion.query(`select  * from Users`);
  return ruselts;
};

const getByID = async (id) => {
  let [ruselts, fields] = await connetion.query(
    `select * from Users where ID = ?`,
    [id]
  );
  let user = ruselts && ruselts.length > 0 ? ruselts[0] : {};
  return user;
};

const getUpdate = async (id, email, name, city) => {
  let [ruselts, fields] = await connetion.query(
    `update Users set EMAIL = ?, NAME = ?, CITY =? where ID =?`,
    [id, email, name, city]
  );
  return ruselts;
};

const getDelete = async (id) => {
  let [ruselts, fields] = await connetion.query(
    `delete from Users where ID=?`,
    [id]
  );
  return ruselts;
};

module.exports = {
  getAllUsers,
  getByID,
  getUpdate,
  getDelete,
};
