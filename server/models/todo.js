var mongoose=require("mongoose");

var schema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    name:{
type:String,
default:"Janardan"
    },
    age: {
        type:Number,
        default:22
    },
    completed:{
        type:Boolean,
        default:false
    },
    completedAt:{
        type:String,
        default:null
    }
});

var Todo = mongoose.model("Todo", schema);

module.exports={Todo};