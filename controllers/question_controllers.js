const Question=require("../models/question");
const Answer=require("../models/answers");
var id;
const questionregister=async(req,res,next)=>{
    //get data from request
    const {title,option_A_title,option_B_title,option_C_title,option_D_title,level,category,
    no_of_times_used,no_of_times_correct,no_of_times_wrong,answer}=req.body.data; 
    console.log(title,option_A_title,option_B_title,option_C_title,option_D_title,level,category,
      no_of_times_used,no_of_times_correct,no_of_times_wrong,answer);
    res.send("api is hit");
    //create question
    const question =new Question(
      {
        title,option_A_title,option_B_title,option_C_title,option_D_title,level,category,
        no_of_times_used,no_of_times_correct,no_of_times_wrong
      }
     
    )
    
    try
    {
        const{_id}=await question.save();
        console.log(_id);
        id=_id;
    }
    catch(err)
    {
      res.status(400).json({message: err.message})
    }
    const answer_to_save=new Answer({
      _id:id,
      answer
    });
    try{ 
      const data= await answer_to_save.save();
      console.log(data);
    }catch(err){
      res.status(400).json({message: err.message})
    }
  }

const fetchquestionsbylevel =async(req,res,next)=>{
  const level=req.params.id;
  try{
    const data= await Question.find({level:level});
    console.log(data);
    res.send(data);
    res.status(200);
  }catch(err){
    res.status(400).json({message: err.message})
  }
}

const fetchquestionsbycategory =async(req,res,next)=>{
  const category=req.params.id;
  try{
    const data= await Question.find({category:category});
    console.log(data);
    res.send(data);
    res.status(200);
  }catch(err){
    res.status(400).json({message: err.message})
  }
}

exports.questionregister=questionregister;
exports.fetchquestionsbylevel=fetchquestionsbylevel;
exports.fetchquestionsbycategory=fetchquestionsbycategory;
