const express=require('express');
const app=express();
const path=require('path')
var port = process.env.PORT || 1337;
const publicDir=path.join(__dirname,'public')
const fs=require('fs')
const dotenv = require('dotenv');
dotenv.config();

// const livereload=require('livereload');
// const server=livereload.createServer();
// server.watch(publicDir);
// const livereload2=require('connect-livereload');


//app.use(livereload2())

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'))







app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./public/index.html'))
})
app.get('/project',(req,res)=>{
    fs.readFile('./public/db/projects.json','utf8',(error,data)=>{
res.json(data)  
  })
})


app.listen(port,()=>{
    console.log('LISTEN')
})
