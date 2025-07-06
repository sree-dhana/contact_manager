const asyncHandler=require("express-async-handler");
const jwt=require("jsonwebtoken");
User=require("../models/userModels");

const validToken=asyncHandler(async(req,res,next)=>{
    let token;
    let authHeader=req.headers.authorization||req.headers.Authorization;
    if(authHeader && authHeader.startsWith("Bearer")){
        token=authHeader.split(" ")[1];
        if(!token){
            res.status(401);
            throw new Error("token invalid");
        }
        jwt.verify(token,process.env.ACCESS_TOKEN_KEY,(err,decoded)=>{
            if(err){
                res.status(403);
                throw new Error("user is not authorized");
            }
            req.user=decoded.user;
            next();
            
        });
        
        
    };
});
module.exports=validToken;