const express = require('express')
const mysql = require('mysql')
const params = require('params');

// loading express
const app = express();

// mysql credentials
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodejsmysql'
})

// create connection with mysql
connection.connect((err, connection) => {
    if (err) throw err
    console.log('connection created successfully')
})

// create deafult routes
app.get('/', (req, res) => {
    res.send('Welcome to the database platform');
});

// this routes will be executed for create new database
app.get('/created', (req, res) => {
    // create a new database query
    let sql = 'CREATE DATABASE NODEJSMYSQL';

    // run the mysql database query
    connection.query(sql, (err, result) => {
        if (err) throw err;
        // console.log(result);
        return res.send('Database created successfully')
    })
});

// create a new table routes
app.get('/create/:table', (req, res) => {
    // check if table exists and create it if it doesn't exist
    let tableQuery = `CREATE TABLE IF NOT EXISTS ${req.params.table} (
        id INT PRIMARY KEY AUTO_INCREMENT,
        Name VARCHAR(255) DEFAULT NULL,
        roll_no INT ,
        address TEXT DEFAULT NULL,
        phone INT NOT NULL,
        email VARCHAR(255) NOT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
      )`;

    // excute the query 
    connection.query(tableQuery, (err, result) => {
        if(!err && result){

            res.send('table created successfully');
        }else{
            console.log('table created failed ' + err)
        }
    })
})

// listen on port
app.listen('8080', () => {
    console.log('listening on http://localhost:8080');
})