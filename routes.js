const express=require("express");
const router=express.Router();

router.get("/test1",(req,res,next)=>{
    console.log("testing");
    res.send("testing at router level");
})


module.exports = router;