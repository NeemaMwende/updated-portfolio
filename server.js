const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const emailjs = require('emailjs-com');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Mikaelson@12.',
    database: 'portfolio'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('MySQL connected...');
});

app.post('/contact', (req, res) => {
    const { firstname, lastname, email, message } = req.body;
    const sql = 'INSERT INTO contacts (first_name, last_name, email, message) VALUES (?, ?, ?, ?)';
    
    db.query(sql, [firstname, lastname, email, message], (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            res.status(500).send('There was an error submitting the form');
            return;
        }

        // Prepare and send email with EmailJS
        const templateParams = {
            from_name: `${firstname} ${lastname}`,
            from_email: email,
            message: message,
        };

        emailjs.send(
            'service_ck8cm4a', // Replace with your EmailJS service ID
            'template_bl0du4j', // Replace with your EmailJS template ID
            templateParams,
            'AD5uQhpmjSLM8QZvv' // Replace with your EmailJS user ID
        )
        .then((response) => {
            console.log('Email successfully sent!', response.status, response.text);
            res.send('Contact form submitted and email sent');
        })
        .catch((error) => {
            console.error('Error sending email:', error);
            res.status(500).send('There was an error sending the email');
        });
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
