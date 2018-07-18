// const MongoClient = require("mongodb").MongoClient;
const {MongoClient,ObjectID}=require("mongodb");

// MongoClient.connect("mongodb://localhost/", (err, db) => {
//     if (err) {
//         throw err;
//         console.log("Unable to connect to mongo database");
//     }
//     var db=db.db("TodoApp");
//     console.log("server is connected succesfully");
// db.collection("Todos").find({completed:true}).toArray().then((docs)=>{
// console.log("Todos");
// console.log(JSON.stringify(docs,undefined,2));
// },(err)=>{
//     console.log("Unable to fetch the data",err);
// });

//     // db.close();
// });


// // count in cursor
// console.log("============");
// MongoClient.connect("mongodb://localhost/",(err,db)=>{
// if(err){
//     console.log("Error is occured in count");
// }
// var db=db.db("TodoApp");
// db.collection("Todos").count().then((res)=>{
// console.log(res);
// },(err)=>{
//     console.log("Error is occured");
// });
// });

MongoClient.connect("mongodb://localhost/",(err,db)=>{
    if(err){
        throw err;
        console.log("Error is occured");
    }
    console.log("Time to challenge");
    var db=db.db("TodoApp");
    db.collection("User").find({name:"Janardan"}).toArray().then((docs)=>{
console.log(JSON.stringify(docs,undefined,3));
    },(err)=>{
console.log("showing error to find data");
    });
});



