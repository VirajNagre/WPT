import express from 'express';
import { conn } from './utility/dbUtils.js';

// let conn;

const app = express();

async function run() {
    // try {
    //   // Connect the client to the server	(optional starting in v4.7)
    //   await client.connect();
    //   // Send a ping to confirm a successful connection
    //   await client.db("admin").command({ ping: 1 });
    //   console.log("Pinged your deployment. You successfully connected to MongoDB!");
    // } finally {
    //   // Ensures that the client will close when you finish/error
    // //   await client.close();
    // console.log("ouauhdi");
    // }
    try {
        // Connect to the MongoDB server
        conn = await client.connect();
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        // If MongoDB connection fails, close the Express server
        console.log('Exiting...');
        process.exit(1);
    }
}


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
        // run().catch(console.dir);
        // conn.
        console.log("server running")
    }
);
