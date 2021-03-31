const nodemailer = require("nodemailer");

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'fogniebla@gmail.com', // generated ethereal user
      pass: process.env.PASSGMAIL, // generated ethereal password
    },
  });

  transporter.verify().then(() => {
      console.log('Ready for send emails')
  });


  module.exports = transporter;