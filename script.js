var nodemailer = require('nodemailer');
require("dotenv").config();

var transporter = nodemailer.createTransport({
  service: 'gmail',
  port: 587,
  secure: false,
  auth: {
    user: process.env.USER,
    pass: process.env.PASSWORD
  }
});

var mailOptions = {
  from:  process.env.USER,
  to: process.env.CLIENT,
  subject: 'Sending Email using nodemailer',
  text: 'Deepuraj P  Batch: E34'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});