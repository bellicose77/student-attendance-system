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


//error handler 
app.use((err,req,res,next)=>{
    const message = err.message ? err.message :"ServerSide error";
    const status = err.status ? err.status:500;
    return res.status(status).json(message)
    
})

app.listen(port, () => {
    connect();
    console.log(`Example app listening on port ${port}`)
  })