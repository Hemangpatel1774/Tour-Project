const express = require('express');  
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
app.use(express.json())
app.use(cors({ origin: true }));
dotenv.config();
const port = process.env.PORT || 5001;

app.get('/',(req,res)=>{
    res.send('hello world');
})
app.post('/api/register',(req,res)=>{
   console.log(req.body);
   res.send("Register Successfully!");
})
app.listen(port,()=>{
    console.log(`app listening at http://localhost:${port}`);
})