const mongoose=require("mongoose");
const contactSchema=mongoose.Schema({
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