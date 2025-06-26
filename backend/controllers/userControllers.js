const user=require("../models/userModels" );
const asyncHandler=require("express-async-handler");
// @desc register a user
// @route POST /api/users/register
// @acess public
const userRegister= asyncHandler(async(req,res)=>{
    const {email,username,password}=req.body;
    if(!username||!email||!password){
        res.status(400);
        throw new Error("all fields are mandatory");
    }
    const userAvailable=await user.findOne({email});
    if(userAvailable){
        throw new Error("user already present");
    }
    res.json({message:"REGISTER THE USER"});
});
// @desc login a user
// @route GET /api/users/login
// @acess public
const userLogin= asyncHandler(async(req,res)=>{
    res.json({message:"login"})
});
// @desc login a user
// @route GET /api/users/login
// @acess public
const currDetails= asyncHandler(async(req,res)=>{
    res.json({message:"get current user details"})
});
module.exports={userLogin,userRegister,currDetails};