const express=require("express");
const router=express.Router();
const {userRegister,userLogin,currDetails}=require("../controllers/userControllers");

router.post("/register",userRegister);
router.post("/login",userLogin);
router.get("/current",currDetails);
module.exports=router;