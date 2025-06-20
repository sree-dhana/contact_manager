const mongoose=require("mongoose");
const userSchema= mongoose.Schema({
    userName:{
        type:String,
        required: [true,"please add username"]
    },
    email:{
        type: String,
        required:[true,"please write ur email"],
        unique:[true,"email already taken"]
    },
    password:{
        type:String,
        required:[true,"please enter password"]
    }
});
module.exports=mongoose.model("users",userSchema);