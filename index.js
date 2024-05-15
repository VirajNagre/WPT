import express from 'express';

const app = express();

app.get("/",(req,res)=>{
    console.log("endpoint reached");
    res.send("ok");
})

app.listen(5000,()=>{console.log("server running")});
