var express=require("express");
var bodyParser=require("body-parser");


var {mongoose} = require("./db/mongoose");
var {Todo}=require("./models/todo");
var {Uesr}=require("./models/user");

var app=express();
app.use(bodyParser.json());

app.post("/todo",(req,res)=>{
var todo =new Todo({
    text:req.body.text
});

todo.save().then((docs)=>{
res.send(docs);
},(err)=>{
res.status(400).send(e);
})

console.log(req.body);
});

app.listen(3000,()=>{
    console.log("Server is started");
})