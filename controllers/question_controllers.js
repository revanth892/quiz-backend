const Question=require("../models/question");

const questionregister=async(req,res,next)=>{
    //get data from request
    const {title,option_A_title,option_B_title,option_C_title,option_D_title,level,category,
no_of_times_used,no_of_times_correct,no_of_times_wrong}=req.body.data; 
    console.log(title,option_A_title,option_B_title,option_C_title,option_D_title,level,category,
      no_of_times_used,no_of_times_correct,no_of_times_wrong);
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
        // const data = await question.find();
        // console.log(data);
        const data = await Question.findById(_id).exec();
        console.log(data);
    }
    catch(err)
    {
      res.status(400).json({message: err.message})
    }
  }

// const fetchalldata=async(req,res,next)=>{
//     const data = await Question.find();
//     console.log(data);
// };
exports.questionregister=questionregister;

