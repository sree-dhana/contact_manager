const express=require("express");
const router=express.Router();

router.post("/register",(req,res)=>{
    res.json({message:"REGISTER THE USER"})
});
router.post("/login",(req,res)=>{
    res.json({message:"login"})
});
router.get("/current",(req,res)=>{
    res.json({message:"get current user details"})
});
module.exports=router;