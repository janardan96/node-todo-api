const {MongoClient}=require("mongodb");

MongoClient.connect("mongodb://localhost/",(err,db)=>{
    if(err){
        throw err;
        console.log("Error is occured");
    }
    var db=db.db("TodoApp");
    console.log("Connect to mongo database");
    //Deleted Many Files

    // db.collection("Todos").deleteMany({name:"Megha"}).then((docs)=>{
    //     console.log(`Data is deleted ${docs}`);
    //     console.log(docs.result.n);
    // });


    //Deleted One file
    db.collection("Todos").deleteOne({name:"Janardan"}).then((res)=>{
        console.log(`Deleted data is ${res}`);
    },(err)=>{
        console.log(`Error is ${err}`);
    });
});