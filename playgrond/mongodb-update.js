const {
    MongoClient,
    ObjectID
} = require("mongodb");

MongoClient.connect("mongodb://localhost/", (err, db) => {
    if (err) {
        throw err;
        console.log("Error is present");
    }
    console.log("server is connected");
    var db = db.db("TodoApp");
    // db.collection("Todos").findOneAndUpdate({
    //     _id:new ObjectID("5b4d7449c7b21220802b46a6")
    // },{
    //     $set:{
    // text:"Udated by janardan"
    //     }
    // },{
    //     returnOriginal:false
    // }).then((res)=>{
    // console.log(res);
    // },(err)=>{
    //     console.log(`Error is ${err}`);
    // });

    db.collection("User").findOneAndUpdate({
        _id: new ObjectID("5b4e9d6f548abe1a6835c48e")
    }, {
        $set: {
            name: "Janardan Prajapati"
        },
        $inc: {
            age: 5
        }
    }, {
        returnOriginal: false
    }).then((res) => {
        console.log(res);
    });
});