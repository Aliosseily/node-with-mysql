const mysql = require("mysql");

// create connection
const connectDB = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mysql",
  database: "person",
});

module.exports = connectDB
