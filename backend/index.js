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
app.use((err,req,res,nex)=>{
    if(err.message){
        res.status(400).json({message:err.message})
    }
    else{
        
    }
})

app.listen(port, () => {
    connect();
    console.log(`Example app listening on port ${port}`)
  })