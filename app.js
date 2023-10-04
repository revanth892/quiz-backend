const express=require("express");
const mongoose=require("mongoose");
const app=express();
const router =require("./routes");
const PORT =8080;
const mongowebsite="mongodb+srv://revanth:Fnn5CZP60voQkSWe@cluster0.m04ifpl.mongodb.net/?retryWrites=true&w=majority";
app.use("/",router);
app.listen(PORT,()=>{
    console.log("scaning at port 8080");
});


mongoose.connect(mongowebsite)
.then(()=>{
    console.log("the database is connected");
})
.catch(err=>{
    console.log(err);
})