const mysql = require("mysql");
const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyparser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Mikaelson@12.',
    database: 'portfolio'
});

db.connect((err) => {
    // if(error) {
    //     console.log('Error connecting to the database');
    // }else{
    //     console.log('Successfully connected to the database');
    // }
    if (err) throw err;
    console.log("MySQL connected...");
});

//contact form route
app.post('/contact', (req, res) => {
    const { firstname, lastname, email, message } = req.body;
    const sql = 'INSERT INTO contacts (first_name, last_name, email, message ) VALUES (?, ?, ?, ?)';
    db.query(sql, [firstname, lastname, email, message], (err, result) => {
        if(err) throw err;
        res.send('Contact form submitted');
    });
});

app.listen(port, ()=> {
    console.log(`Server running on port ${port}`);
});