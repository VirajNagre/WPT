import express from 'express';

const app = express();

app.get("/",(req,res)=>{
    console.log("endpoint reached");
    res.send("ok");
})

app.get("/shantanu",(req,res) =>{
    res.send("shantanu")
    })
app.get("/jitendra",(req,res) =>{
    res.send("jitendra")
    })
app.listen(5000,()=>{console.log("server running")});
