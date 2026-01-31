const registeruser = require("../models/registeruser.model");
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer')


const adduser = async (req, res) => {
    try {
        const otp = Math.floor(1000 + Math.random() * 9000);

        // console.log(req.body.password);

        const password = req.body.password;
        const saltRounds = 10; //random extra value if same password by user but add slat topassword that identify uniquly
        const hashpassword = await bcrypt.hash(password, saltRounds)

        const register = await registeruser.create({ ...req.body, password: hashpassword, otp: otp });

        if (!register) {
            return res.status(400).json({ data: null, message: 'user not add' });
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'kothiyachandani34@gmail.com',
                pass: 'yrwzkhkbrnkrxmkv'
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        const mailoption = {
            from: 'kothiyachandani34@gmail.com',
            to: req.body.email,
            subject: 'verify user email',
            text: `your otp is ${otp}`
        }

        transporter.sendMail(mailoption, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        })

        return res.status(200).json({ data: register, message: 'user add succesfully' })

    } catch (error) {
        return res.status(400).json({ data: null, message: 'internal server error at add user' + error.message })
    }
}

module.exports = {
    adduser
}