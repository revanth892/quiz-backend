const express=require("express");
const {questionregister,fetchquestionsbylevel,fetchquestionsbycategory} = require("./controllers/question_controllers");
const router=express.Router();

router.get("/test1",(req,res,next)=>{
    console.log("testing");
    res.send("testing at router level");
})

router.post("/createquestion",questionregister);
router.get("/questions/level/:id",fetchquestionsbylevel);
router.get("/questions/category/:id",fetchquestionsbycategory);
module.exports = router;