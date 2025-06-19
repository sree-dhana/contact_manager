const express=require("express");
const errorHandling=require("./middleware/errorHandling");
const connectDB = require("./config/dbConnections");
const dotenv=require("dotenv").config();

const app=express();
const port=process.env.PORT||5001;
connectDB();
app.use(express.json());
app.use("/api/contacts",require("./routes/contactRoutes"));
app.use("/api/users",require("./routes/userRoutes"));
app.use(errorHandling);

app.listen(port,()=>{
    console.log(`server is running at ${port}`);
})