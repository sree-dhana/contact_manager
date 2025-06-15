const {constants}=require("../constants");
const errorHandling=(err,req,res,next)=>{
    const statusCode=res.statusCode? res.statusCode:500;
    switch(statusCode){
        case constants.VALIDATION_ERROR:
            res.json({
                title:"validation error",
                message:err.message,
                stack:err.stack
            })
            break;
        case constants.SERVER_ERROR:
            res.json({
                title:"server error",
                message:err.message,
                stack:err.stack
            })
            break;
        default:
            console.log("you good lessgo");
            
    }
}
module.exports=errorHandling;