import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import routes from './routes/main.js'
import cors from 'cors'

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
};
//build in middelware
app.use(express.json())
app.use(cors());

//middel ware 
app.use(routes)


app.listen(port, () => {
    connect();
    console.log(`Example app listening on port ${port}`)
  })