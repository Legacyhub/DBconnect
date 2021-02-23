var mysql = require('mysql');
var config = require('./config.json');

var pool  = mysql.createPool({
    host     : config.dbhost,
    user     : config.dbuser,
    password : config.dbpassword,
    database : config.dbname
  });

pool.getConnection(function(err, connection) {
  // Use the connection
  connection.query('SELECT emp_name from Employee where emp_id=1', function (error, results, fields) {
    // And done with the connection.
    connection.release();
    // Handle error after the release.
    if (error) throw error;
    else console.log(results[0].emp_name);
    process.exit();
  });
});