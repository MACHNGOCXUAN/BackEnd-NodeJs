const express=require("express");
const router=express.Router();
const {getHomepage,getViews,getIMG}=require("../controllers/homeController");



router.get('/js', getIMG);
router.get("/controller",getHomepage);
router.get("/view",getViews);

module.exports=router;