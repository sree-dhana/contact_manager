const User=require("../models/contactModels" );
const asyncHandler=require("express-async-handler");
// @desc register a user
// @route POST /api/users/register
// @acess public
const userRegister= asyncHandler(async(req,res)=>{
    res.json({message:"REGISTER THE USER"})
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