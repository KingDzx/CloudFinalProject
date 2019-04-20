const express = require('express')
const port=3000
const app = express()
const path= require('path');
const BP = require('body-parser');

var mysql = require('mysql');
var con = mysql.createConnection({
  host: "cdv5lqgcl8cjzf.c6jbv005fmwy.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "password123",
  database: "users"
});

con.connect(function(err) {
  if (err) console.log("Error!!!!!");
  else{
    console.log("Connected!");
    var sql = "CREATE TABLE IF NOT EXISTS UserAccount (Email VARCHAR(255) NOT NULL PRIMARY KEY, Name VARCHAR(255) NOT NULL, Number VARCHAR(255) NOT NULL, Password VARCHAR(255) NOT NULL)";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
  }
});

app.use(BP.json())
app.use(BP.urlencoded({extended: true}))
app.use('/css',express.static(__dirname +'/pages/css'));
app.get('/',(req,res)=> res.sendFile(path.join(__dirname + '/pages/index.html')))
app.get('/profile',(req,res)=> res.sendFile(path.join(__dirname + '/pages/Profile_Page.html')))
app.get('/registration',(req,res)=> res.sendFile(path.join(__dirname + '/pages/cloud_registration_page.html')))
app.get('/subscription',(req,res)=> res.sendFile(path.join(__dirname + '/pages/Subscription.html')))
app.get('/login',(req,res)=> res.sendFile(path.join(__dirname + '/pages/login.html')))
app.post('/registration', function(req, res){
  console.log(req.body);

  var name=req.body.name;
  var email=req.body.email;
  var number=req.body.number;
  var password=req.body.password;
  var password2=req.body.password2;

  if (password == password2){
    var queryStatement = "INSERT INTO UserAccount (Email, Name, Number, Password) VALUES ('"+email+"', '"+name+"','"+number+"','"+password+"')";

    con.query(queryStatement, function (err, result){
      if (err) console.log("Error!!!!!");
      else console.log("1 record inserted");
    })
    res.sendFile(path.join(__dirname + '/pages/index.html'))
  }
});
app.post('/login', function(req, res){
  var email=req.body.email;
  var password=req.body.password;

  var queryStatement = "SELECT * from UserAccount WHERE Email = '"+email+"'";
  con.query(queryStatement, function (err, result){
    if (err) console.log("Error!!!!!");
    else{
      console.log(result[0].Name);
      if (result[0].Password == password){
        res.sendFile(path.join(__dirname + '/pages/Profile_Page.html'));
      }else{
        res.sendFile(path.join(__dirname + '/pages/login.html'))
      }
    }
  })
})
app.listen(port)
