const mongoose=  require("mongoose");

const Schema=mongoose.Schema;

const question=new Schema({
    title:{
        type: String,
        require :true,
        default:"NONE"
    },
    option_A_title:{
        type: String,
        require:true,
        default:"NONE"
    },
    option_B_title:{
        type: String,
        require:true,
        default:"NONE"
    },
    option_C_title:{
        type: String,
        default:"NONE"
    },
    option_D_title:{
        type: String,
        default:"NONE"
    },
    level:{
        type: String,
        require:true
    },
    category:{
        type: String,
        require:true
    },
    no_of_times_used:
    {
        type:Number,
        default:0
    },
    no_of_times_correct:
    {
        type:Number,
        default:0
    },
    no_of_times_wrong:
    {
        type:Number,
        default:0
    }
})

module.exports= mongoose.model('Questions',question);
