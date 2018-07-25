const {SHA256}=require("crypto-js");

const jwt=require("jsonwebtoken");

var data={
    id:10
}
var token=jwt.sign(data,"112");
console.log(token);


// var message="I am in number 2";
// var hash=SHA256(message).toString();
// console.log(message);
// console.log(hash);  

// var data={
//     id:4
// }

// var token={
//     data,
//     hash: SHA256(JSON.stringify(data)+ "Some secret").toString()
// }
// var resultHash=SHA256(JSON.stringify(token.data)+ "Some secret").toString();
// if(resultHash === token.hash){
//     console.log("data is not changed");
// }
// else{
//     console.log("data is changed");
// }