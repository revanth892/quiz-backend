const express=require("express");
const {questionregister} = require("./controllers/question_controllers");
const router=express.Router();

router.get("/test1",(req,res,next)=>{
    console.log("testing");
    res.send("testing at router level");
})

router.post("/createquestion",questionregister);

module.exports = router;