const mongoose=require("mongoose");


let mongoURL="mongodb+srv://projetjs2024:lz123@cluster0.8tqbf.mongodb.net/pizza";
mongoose.connect(mongoURL);
let db =mongoose.connection;
db.on('error',()=>{
    console.log("faild");
});
db.on('connected',()=>{
    console.log("success");
});

module.exports=mongoose;