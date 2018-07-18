// const MongoClient = require("mongodb").MongoClient;
const {MongoClient,ObjectID}=require("mongodb");

// MongoClient.connect("mongodb://localhost/TodoApp", (err, db) => {
//     if (err) {
//         console.log("Unable to connect to mongo database");
//     }
//     console.log("server is connected succesfully");

    // db.collection('Todos').insertOne({
    //     text: "Something is different",
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log("unable to insert todo", err)
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

//     db.collection("User").insertOne({
//         name:"Janardan",
//         age:25,
//         location:"Delhi"
//     },(err,result)=>{
// if(err){
//     console.log("Unable to insert todo",err);
// }
// console.log(result.ops[0]._id.getTimestamp)
// console.log(result.ops);
//     })
    

//     db.close();
// });

//latest version of mongodb syntax


//var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("TodoApp");
  var myobj = [
    { name: 'Janardan', address: 'Highway 71'},
    { name: 'kapil', address: 'Lowstreet 4'},
    { name: 'janardan', address: 'Apple st 652'},
    { name: 'Megha', address: 'Mountain 21'},
    { name: 'Megha', address: 'Valley 345'},
    { name: 'John', address: 'Highway 71'},
    { name: 'Peter', address: 'Lowstreet 4'},
    { name: 'Amy', address: 'Apple st 652'},
    { name: 'Hannah', address: 'Mountain 21'},
    { name: 'Michael', address: 'Valley 345'},

  ]
  dbo.collection("Todos").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("document inserted");
    console.log(JSON.stringify(res,undefined,2));
    // db.close();
  });
});
