const mongoose=require("mongoose");

const Schema=mongoose.Schema;

const answer= new Schema({
    answer:{
        type: String,
        require:true,
        default:"NONE"
    }
})

module.exports=mongoose.model('Answers',answer);