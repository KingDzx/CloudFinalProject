const express = require('express')
const port=5000
const app=express()
const path= require('path');
app.use('/css',express.static(__dirname +'/pages/css'));
app.get('/',(req,res)=> res.sendFile(path.join(__dirname + '/pages/index.html')))
app.get('/profile',(req,res)=> res.sendFile(path.join(__dirname + '/pages/Profile_Page.html')))
app.get('/registration',(req,res)=> res.sendFile(path.join(__dirname + '/pages/cloud_registration_page.html')))
app.get('/subscription',(req,res)=> res.sendFile(path.join(__dirname + '/pages/Subscription.html')))
app.get('/login',(req,res)=> res.sendFile(path.join(__dirname + '/pages/login.html')))

var mysql = require('mysql');
var con = mysql.createConnection({
  host: "cd8xqu2cwopd73.c6jbv005fmwy.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "password123",
});

con.connect(function(err) {
    if (err){
        console.log("There's an Error Here Chief");
        throw err;
    } 
  console.log("Connected!");
});
app.listen(port)

