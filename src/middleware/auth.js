const jwt = require("jsonwebtoken");
const user = require("../models/user.model")

const auth = (roles) => async (req, res, next) => {

    try {

        //console.log(roles,req.cookies,req.header("Authorization"))

        const token = req.cookies.accesstoken || req.header("Authorization")?.replace('bearer ', "");
        console.log(token)

        const decodetoken = await jwt.verify(token, process.env.ACCESS_TOKEN_KEY)
        console.log(decodetoken)

        const users = await user.findById(decodetoken._id);

        if (!users) {
            res.status(404).json({
                success: false,
                data: null,
                message: 'user not found'
            })
        }

        if (!roles.includes(users.role)) {
            res.status(400).json({
                success: false,
                data: null,
                message: 'you have not access'
            })
        }

        req.user = users;
        next();

    } catch (error) {
         return res.status(500).json({
            success: false,
            data: null,
            message: 'internal server error at login user' + error.message
        })
    }

}

module.exports = auth;