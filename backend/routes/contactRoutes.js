const express=require("express");
const router=express.Router();
const {getContact,updateContact,createContact,deleteContact,getsContact}=require("../controllers/contactControllers");
const validToken = require("../middleware/validateTokenHandler");
router.use(validToken);
router.route("/").get(getsContact).post(createContact);
router.route("/:id").put(updateContact).delete(deleteContact).get(getContact);




module.exports=router;
