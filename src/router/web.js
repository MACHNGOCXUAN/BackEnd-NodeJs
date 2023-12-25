const express = require("express");
const router = express.Router();
const {
  getCreateUser,
  viewCreate,
  viewHome,
  viewUpdate,
  UpdateUser,
  viewDelete,
  DeleteUser,
} = require("../controllers/homeController");

router.get("/create", viewCreate);
router.get("/home", viewHome);
router.post("/create-user", getCreateUser);
router.get("/edit/:ID", viewUpdate);
router.post("/tc", UpdateUser);
router.get("/delete/:ID", viewDelete);
router.post("/delete", DeleteUser);

module.exports = router;
