var mysql = require('mysql');
var con = mysql.createConnection({
    host     : process.env.RDS_HOSTNAME,
    user     : process.env.RDS_USERNAME,
    password : process.env.RDS_PASSWORD,
    port     : process.env.RDS_PORT
});

con.connect(function(err) {
    if (err){
        console.log("There's an Error Here Chief");
        throw err;
    } 
  console.log("Connected!");
});