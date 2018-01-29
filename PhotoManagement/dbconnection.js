var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    port: 8889,
    database:"photo_management"
});

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT DISTINCT * FROM image_dim LIMIT 10", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });