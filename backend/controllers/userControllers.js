const User=require("../models/userModels" );
const asyncHandler=require("express-async-handler");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
// @desc register a user
// @route POST /api/users/register
// @acess public
const userRegister= asyncHandler(async(req,res)=>{
    const {email,username,password}=req.body;
    if(!username||!email||!password){
        res.status(400);
        throw new Error("all fields are mandatory");
    }
    const userAvailable=await User.findOne({email});
    if(userAvailable){
        res.status(400);
        throw new Error("user already present");
    }
    const hashedPassword=await bcrypt.hash(password,10);
    console.log(hashedPassword);
    const user=await User.create({
        username,
        email,
        password:hashedPassword,
    });
    console.log(user);
    if(user){
        return res.status(201).json({
         _id: user._id,email: user.email
        });
    }else{
        res.status(400);
        throw new Error("user not valid");
    }
 
     
});
// @desc login a user
// @route GET /api/users/login
// @acess public
const userLogin= asyncHandler(async(req,res)=>{
    const {email,password}=req.body;
    if(!email||!password){
        res.status(400);
        throw new Error("all fields are required");
    }
    const user=await User.findOne({email}); 
    if(user && (await bcrypt.compare(password,user.password))){
        const accessToken=jwt.sign({
            user:{
                email: user.email,
                username: user.username,
                id: user._id
            },
        },
        process.env.ACCESS_TOKEN_KEY,
        {expiresIn:"1hr"}
    );
        res.status(200).json({accessToken});
    }else{
        res.status(400);
        throw new Error("invalid password or username");
    }

});
// @desc login a user
// @route GET /api/users/login
// @acess public
const currDetails= asyncHandler(async(req,res)=>{
   
    res.json({message:"get current user details", user:req.user})
});
module.exports={userLogin,userRegister,currDetails};