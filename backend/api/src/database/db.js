var mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'projetfinal'
});

conn.connect(function(err) {
    if (err) throw err;
    console.log("Connected to db!");
   
  });
module.exports = conn