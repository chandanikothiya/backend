const registeruser = require("../models/registeruser.model")
const bcrypt = require("bcrypt")
const cookieparser = require("cookie-parser")

const loginuser = async (req, res) => {

    try {
        const userdata = await registeruser.find();

        const finduser = userdata.find((v) => v.email === req.body.email)


        if (!finduser) {
            return res.status(400).json({ data: null, message: 'email id not found' })
        }

        const checkpassword = await bcrypt.compare(req.body.password, finduser.password)

        if (checkpassword) {
            console.log("yes");
            res.cookie('name','loginsuucessflly');
            console.log('cookie have created successfully');
        }

        if (!checkpassword) {
            return res.status(400).json({ data: null, message: 'password not match' })
        }

        return res.status(200).json({ data: finduser, message: 'finduser get and login' })

    } catch (error) {
        return res.status(400).json({ data: null, message: 'internal server error at login user' + error.message })
    }

}

module.exports = {
    loginuser
}