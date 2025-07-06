const express=require("express");
const router=express.Router();
const {userRegister,userLogin,currDetails}=require("../controllers/userControllers");
const validToken = require("../middleware/validateTokenHandler");

router.post("/register",userRegister);
router.post("/login",userLogin);
router.get("/current",validToken,currDetails);
module.exports=router;