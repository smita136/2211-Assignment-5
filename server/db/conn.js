const mongoose = require("mongoose");

const DB = "mongodb://localhost:27017/mern";

mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("connection")).catch((error)=> console.log(error.message));