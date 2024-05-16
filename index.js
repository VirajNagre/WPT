import express from 'express';
import { client } from './utility/dbUtils.js';

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

app.listen(5000,async()=>{
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
      } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
      }
    console.log("server running")});
