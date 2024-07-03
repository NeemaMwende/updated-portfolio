const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sgMail = require('@sendgrid/mail'); // Import SendGrid

const app = express();
const port = 5000;

// Set up SendGrid
sgMail.setApiKey('F4NMWYHM3P5WXL2RJLYZN8UZ '); // Replace with your SendGrid API key

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

        // Prepare and send email with SendGrid
        const msg = {
            to: 'neemamwende009@gmail.com', // Replace with your email address
            from: 'sender_email@example.com', // Replace with the sender's email address
            subject: 'New Contact Form Submission',
            text: `Name: ${firstname} ${lastname}\nEmail: ${email}\nMessage: ${message}`,
        };

        sgMail.send(msg)
            .then(() => {
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
