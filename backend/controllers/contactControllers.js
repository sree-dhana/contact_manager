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
        number,
    });
    res.status(200).json(contact );
    console.log("the body is",req.body);
    
   
})
// @desc update a contact
// @route PUT /api/contacts/:id
// @acess public
const updateContact=asyncHandler(async (req,res)=>{
    const contact= await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("contact not found");
    }
    const updateContact=await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
);
    res.status(200).json(updateContact);
})
// @desc delete a contact
// @route DELETE /api/contacts/:id
// @acess public
const deleteContact= asyncHandler(async(req,res)=>{
    const contact= await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("contact not found");
    }
    console.log("Fetched contact:", contact); 
    await contact.deleteOne();
    res.status(200).json(contact);
})
// @desc get a contact
// @route GET /api/contacts/:id
// @acess public
const getContact= asyncHandler(async(req,res)=>{
    const contact= await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("contact not found");
    }
    res.status(200).json(contact);
})
module.exports={ getsContact,createContact,updateContact,deleteContact,getContact };