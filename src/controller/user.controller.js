const users = require("../models/user");
const bcrypt = require('bcrypt');
const sendmail = require("../service/nodemailer");
const jwt = require("jsonwebtoken");

const genratetoken = async (_id) => {
    try {
        const user = await users.findById(_id);

        const accesstoken = jwt.sign(
            { _id, "expire": "1h", "role": user.role },
            process.env.ACCESS_TOKEN_KEY,
            { expiresIn: 60 * 60 }
        )

        const refreshtoken = jwt.sign({
            _id, "expire": "7h"
        },
            process.env.REFRESH_TOKEN_KEY,
            { expiresIn: "7d" }
        )

        user.refreshtoken = refreshtoken;
        await user.save();

        return { accesstoken, refreshtoken }

    } catch (error) {
        throw new Error(error.message)
    }
}

const adduser = async (req, res) => {

    try {

        const { email, password } = req.body;

        const userexists = await users.findOne({ email: email });

        if (userexists) {
            return res.status(400).json({
                success: false,
                data: null,
                message: 'user already exists.'
            })
        }

        //salt:- random extra value if same password by user but add slat topassword that identify uniquly
        const hashpassword = await bcrypt.hash(password, 10)
        const otp = Math.floor(1000 + Math.random() * 9000);

        const user = await users.create({ ...req.body, password: hashpassword, otp: otp })

        if (!user) {
            return res.status(400).json({
                success: false,
                data: null,
                message: 'user not registerd'
            })
        }



        await sendmail(email, 'registration otp', `Your otp is ${otp}`);

        const userdata = await users.findOne({ email }).select("-password -otp");

        return res.status(200).json({
            success: true,
            data: userdata,
            message: 'user registration completed'
        })

    } catch (error) {
        return res.status(400).json({
            success: false,
            data: null,
            message: 'internal server error at add user' + error.message
        })
    }
}

const verifyuser = async (req, res) => {
    try {
        const { email, otp } = req.body;

        const user = await users.findOne({ email: email, otp: otp })

        if (!user) {
            return res.status(400).json({
                success: false,
                data: null,
                message: 'Invalid Email or OTP'
            })
        }

        user.isverify = true;

        await user.save();

        return res.status(200).json({
            success: true,
            data: user,
            message: 'Invalid Email or OTP'
        })


    } catch (error) {
        return res.status(400).json({
            success: false,
            data: null,
            message: 'internal server error at add user' + error.message
        })
    }
}

const loginuser = async (req, res) => {
    try {

        const { email, password } = req.body;

        const user = await users.findOne({ email: email });

        console.log(user)

        const checkpass = await bcrypt.compare(password, user.password);

        if (!checkpass) {
            return res.status(400).json({
                success: false,
                data: null,
                message: 'Invalid Email and Password'
            })
        }

        const { accesstoken, refreshtoken } = await genratetoken(user._id);

        console.log(accesstoken, refreshtoken)

        //httpOnly: true means the cookie cannot be accessed by JavaScript and is only sent to server
        res.cookie('accesstoken', accesstoken, { maxAge: 60 * 60, httpOnly: true })
        res.cookie('refreshtoken', refreshtoken, { maxAge: 60 * 60 * 24 * 7, httpOnly: true })

        return res.status(200).json({
            success: true,
            data: user,
            message: 'Login successfully'
        })



    } catch (error) {
        return res.status(400).json({
            success: false,
            data: null,
            message: 'internal server error at add user' + error.message
        })
    }
}

module.exports = {
    adduser,
    verifyuser,
    loginuser
}