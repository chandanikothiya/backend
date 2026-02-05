const jwt = require("jsonwebtoken");
const users = require("../models/user.model")

const auth = async (req,res, next) => {
    //console.log(req.cookies)
    const { accesstoken } = req.cookies

    const decode = jwt.verify(accesstoken,process.env.ACCESS_TOKEN_KEY);
    //console.log(decode)

    const user = await users.findById(decode._id);
    //console.log(user)

    if (!user) {
        return res.status(404).json({
            success:false,
            data:null,
            message:'user not found'
        })
    }

    req.user = user;
    
    next();
}

module.exports = auth;