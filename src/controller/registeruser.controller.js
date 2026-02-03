const registeruser = require("../models/registeruser.model");
const bcrypt = require('bcrypt');
const sendmail = require("../service/nodemailer");


const adduser = async (req, res) => {

    try {

        const { email, password } = req.body;

        const userexists = await registeruser.findOne({ email: email });

        if (userexists) {
            return res.status(400).json({
                success: false,
                data: null,
                message: 'user already exists.'
            })
        }

        //salt:- random extra value if same password by user but add slat topassword that identify uniquly
        const hashpassword = await bcrypt.hash(password, 10)

        const user = await registeruser.create({ ...req.body, password: hashpassword })

        if (!user) {
            return res.status(400).json({
                success: false,
                data: null,
                message: 'user not registerd'
            })
        }

        const otp = Math.floor(1000 + Math.random() * 9000);

        sendmail(email, 'registration otp', `Your otp is ${otp}`);

        const userdata = await registeruser.findOne({ email }).select("-password");

        return res.status(200).json({
            success: true,
            data: userdata,
            message: 'user registration completed'
        })

    } catch (error) {
        return res.status(400).json({ data: null, message: 'internal server error at add user' + error.message })
    }
}

module.exports = {
    adduser
}