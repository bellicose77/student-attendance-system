import express from 'express'
import dotenv from 'dotenv'

const app = express();
dotenv.config()
const port = 8000;

const connect = async()=>{
    try{

    }
    catch(e){
        
    }
}


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })