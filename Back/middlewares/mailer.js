// const nodemailer = require("nodemailer");

// create reusable transporter object using the default SMTP transport
// const transporter = nodemailer.createTransport({
    // host: "smtp.gmail.com",
    // host: "smtp.office365.com",
    //gmail no usa sucureconnection
    //secureConnection: false,
    // port: 465,
    // port: 465,
    // secure: true, // true for 465, false for other ports
    // service: 'Godaddy',
    // auth: {
    //     user: 'administrador@lendiup.com', // generated ethereal user
    //     pass: process.env.PASSGODADDYEMAIL, // generated ethereal password
    // pass: process.env.PASSGMAIL, // generated ethereal password
    // },
//     host: "smtp.gmail.com",
//     port: 465,
//     secure: true,
//     auth: {
//         user: "lendiup@gmail.com",
//         pass: "Zpwjiexxn123*"
//     },
//     logger: true,
//     transactionLog: true // include SMTP traffic in the logs
// });

// transporter.verify().then(() => {
//     console.log('Ready for send emails')
// });


// module.exports = transporter;