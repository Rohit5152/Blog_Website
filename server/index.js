import  express from "express";

import Connection from "./database/db.js";
import cors from 'cors';
import bodyParser from "body-parser";
import Router from './routes/route.js'
import DotEnv  from 'dotenv'

const app=express();
DotEnv.config();

app.use(cors());
app.use(bodyParser.json({extended: true}))
app.use(bodyParser.urlencoded({extended: true}))
app.use('/',Router);
const PORT= process.env.PORT || 8000;
app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`);
})

Connection();
