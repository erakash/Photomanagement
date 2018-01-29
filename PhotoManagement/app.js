var express = require("express");
var app = express();
var path = __dirname + '/views/'
var dbhelper = require('./dbconnection.js');
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    port: 8889,
    database:"photo_management"
});

app.set('views', __dirname + '/views');

//Aakanksha - Loading the pug view engine
app.set('view engine', 'pug');


app.get("/", function (req, res) {
    res.sendFile(path + "index.html");
});

app.get("/contact", function (req, res) {
    res.sendFile(path + "contact.html");
});

app.get("/about", function (req, res) {
    res.sendFile(path + "about.html");
});

app.get("/search", function (req, res) {
    res.sendFile(path + "search1.html");
});

app.listen(3000, function () {
    console.log("Live at Port 3000");
});

app.get("/test", function (req, res) {
    con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT DISTINCT * FROM image_dim", function (err, result, fields) {
          if (err) throw err;
          console.log(result);
          res.render("test", { rows: result, message: 'Hello there!' });
        });
      });
    
  })