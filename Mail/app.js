const express = require('express');
const nodemailer = require('nodemailer');

const app = express();

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    // service: 'gmail', 
    auth: {
        user: 'dr.sidharat@gmail.com',
        pass: 'zqnzkouwvyffcxfx'
    }
});

const mailOptions = {
    from: 'dr.sidharat@gmail.com',
    to: 'surajvsinfo@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

app.get('/', (req, res) => {
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.status(500).send('Error occurred while sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('Mail sent successfully');
        }
    });
});

app.listen(8080, () => {
    console.log('Server listening on port 8080');
});
