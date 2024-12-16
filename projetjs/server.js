const express=require("express");
const db =require("./db.js");
const Pizza=require("./frontend/src/model/pizzaModel.js");
const app=express();
app.use(express.json());
app.get("/",(req,res)=>{
res.send("server working!");
});
app.get("/getpizza", (req, res) => {
    Pizza.find({})
        .then((pizzas) => {
            res.send(pizzas);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send({ error: "Erreur lors de la récupération des pizzas" });
        });
});
const port=process.env.PORT || 8000;
app.listen(port,()=>"server port ");
