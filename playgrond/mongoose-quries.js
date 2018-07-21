const {ObjectId}=require("mongodb");

const {mongoose}=require("./../server/db/mongoose");
const {Todo}=require("./../server/models/todo");

var id="5b524879cf14500160be7a25";

if(!ObjectId.isValid(id)){
    console.log("Id is not valid");
}

// Todo.find({
//     _id:id
// }).then((todos)=>{
// console.log("Todos" + todos);
// });

// Todo.findOne({
//     _id:id
// }).then((todo)=>{
// console.log("Todo" + todo); 
// });

Todo.findById(id).then((todo)=>{
    if(!todo){
        return console.log("Id is not found");
    }
    console.log("2 Todo " + todo);
}).catch((e)=>console.log(e));