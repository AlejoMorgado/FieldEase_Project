const mysql = require('mysql2');
const express = require("express");

const app = express();
app.use(express.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'santimorgado12',
  database: "fieldease"
});
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database: ', err);
    return;
  }
  console.log('Connected to MySQL database.');
});
connection.query('SELECT * FROM users', (err, rows, fields) => {
  if (err) {
    console.error('Error executing MySQL query: ', err);
    return;
  }
  console.log('Query result: ', rows);
});


