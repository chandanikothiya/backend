const nodemailer = require('nodemailer')

const sendmail = async (email, subject, message) => {
    console.log(message)
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.NODEMAILER_MAIL,
                pass: process.env.NODEMAILER_MAIL.NODEMAILER_APPKEY
            },
            tls: {
                rejectUnauthorized: false
            } //accept connection even if certificate is invalid.
        });

        const mailoption = {
            from: process.env.NODEMAILER_MAIL,
            to: email,
            subject: subject,
            text: message
        }

        transporter.sendMail(mailoption, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
                return 'Email sent: ' + info.response;
            }
        })
    } catch (error) {
        throw new Error("send mail error" + error.message)
    }
}

module.exports = sendmail;