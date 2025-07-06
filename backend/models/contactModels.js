const mongoose=require("mongoose");
const contactSchema=mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref: "users",
    },
    name:{
        type:String,
        required:[true,"please write your contact details"]
    },
    number:{
        type:String,
        required:[true,"please write your phone number"]
    }
})
module.exports=mongoose.model("contacts",contactSchema);