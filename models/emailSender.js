const nodemailer = require('nodemailer');
require('dotenv').config();

// *****USING Zoho MAIL SETTINGS*****


const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.eu',
    secure: true,
    port: '465',
    auth: {
        user: process.env.APP_EMAIL,
        pass: process.env.APP_EMAIL_PASSWORD
    },
    tls: {
        rejectUnauthorized: false
    }
});

function sendEmail(emailData, cb) {
    const mailOption = {
        from: process.env.APP_EMAIL,
        to: process.env.CONTACT_EMAIL,
        subject: 'Email from your website',
        html: `
        <h1>Email from contact page in your website</h1>
        <p><strong>Name:</strong> ${emailData.name}</p>
        <p><strong>Sender Email:</strong> ${emailData.email}</p>
        <p><strong>Regarding:</strong> ${emailData.inquiry}</p>
        <p><strong>Message: </strong>${emailData.message}</p>
        `
    };
   return transporter.sendMail(mailOption, (err, info) => {
        console.log('from sendMail: ', info);
        if(err) {
            cb({result: err})
        } else {
            cb({result: 'done'})
        }
    })

}









module.exports = {
    sendEmail
}