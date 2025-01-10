const express =require("express");
const app = express();
const PORT = 5000;

app.get("/",(req,res)=>{
 res.status(200).send("Welcome to world best learing app");
});

app.get("/register",(req,res)=>{
    res.status(200).send("Welcome to Registration page");
   });

app.listen(PORT,()=>{
    console.log(`server is running on port: ${PORT}`);
});