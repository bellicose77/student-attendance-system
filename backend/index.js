import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';

const app = express();
dotenv.config()
const port = 8000;

const connect = async()=>{
    try{
        await mongoose.connect(process.env.MONGO);
        console.log("Database connected")

    }
    catch(e){
        throw(e)
    }
}


app.listen(port, () => {
    connect();
    console.log(`Example app listening on port ${port}`)
  })