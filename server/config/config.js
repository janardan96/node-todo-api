var env=process.env.NODE_ENV || "development";
console.log("env *******" + env);

if(env==="development" || env==="test"){
var config=require("./config.json");
var envConfig=config[env];

Object.keys(envConfig).forEach((key)=>{
process.env[key]=envConfig[key];
})
console.log(config);
}

// if(env==="development"){
//     process.env.PORT=3000;
//     process.env.MONOGDB_URI="mongodb://localhost/2TodoApp";
// }
// else if(env==="test"){
//     process.env.PORT=3000;
//     process.env.MONOGDB_URI="mongodb://localhost/2TodoAppTest";
// }