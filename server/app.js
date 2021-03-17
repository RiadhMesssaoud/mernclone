const express = require('express');
const app = express();
const mongoose = require("mongoose");
const PORT = 5000;
const {MONGOURI} = require('./keys');
require('./models/user')
app.use(express.json())
app.use(require('./routes/auth'))


mongoose.connect(MONGOURI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
mongoose.connection.on('connected',()=>{
    console.log("connected to mongoose")
})
mongoose.connection.on('error',()=>{
    console.log("err connecting",err)
})
//mongoose.connect("mongodb://localhost:27017/mylib", async err => {
  //  if (err) throw err
    //console.log('connected to db success')
//})



app.listen(PORT,()=>{
    console.log('server is running on',PORT)
})
