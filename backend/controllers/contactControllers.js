const Contact=require("../models/contactModels" );
const asyncHandler=require("express-async-handler");
// @desc get all contacts
// @route GET /api/contacts
// @acess public
const getsContact=asyncHandler(async(req,res)=>{
    const contacts= await Contact.find();

    res.status(200).json(contacts);
})
// @desc create a contacts
// @route POST /api/contacts/:id
// @acess public
const createContact=asyncHandler(async(req,res)=>{
    const {name,number}=req.body;
     if(!name|| !number){
        res.status(400);
        throw new Error("all fields are mandatory");
    }
    const contact=await Contact.create({
        name,
    })
    res.status(200).json({message:"create a contact"});
    console.log("the body is",req.body);
    
   
})
// @desc update a contact
// @route PUT /api/contacts/:id
// @acess public
const updateContact=asyncHandler(async (req,res)=>{
    res.status(200).json({message:`update contact ${req.params.id}`});
})
// @desc delete a contact
// @route DELETE /api/contacts/:id
// @acess public
const deleteContact= asyncHandler(async(req,res)=>{
    res.status(200).json({message:`delete contact ${req.params.id}`});
})
// @desc get a contact
// @route GET /api/contacts/:id
// @acess public
const getContact= asyncHandler(async(req,res)=>{
    res.status(200).json({message:`get contact ${req.params.id}`});
})
module.exports={ getsContact,createContact,updateContact,deleteContact,getContact };