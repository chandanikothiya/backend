const registeruser = require("../models/registeruser.model")


const verifyuser = async (req, res) => {
    try {
        console.log(req.body.otp)
        const userdata = await registeruser.find();

        const finduser = userdata.find((v) => v.email === req.body.email)
        const userid = finduser._id.toString();

        // userdata.map((v) => console.log(v))
        // console.log(finduser._id.toString())
        console.log(finduser.otp)

       
        if (!finduser) {
            return res.status(400).json({ data: null, message: 'userdata not get' })
        }

    

        if (finduser.otp.toString() === req.body.otp) {
            // finduser.isverify = true;
            const user = await registeruser.findByIdAndUpdate(
                userid,
                {isverify:true},
                { new: true, runValidators: true }
            )

            if (!user) {
                return res.status(400).json({ data: null, message: 'userdata not update' })
            }

            return res.status(200).json({ data: user, message: 'userdata updated' })
        } 

        return res.status(200).json({ data: finduser, message: 'data are display' })

    } catch (error) {
        return res.status(400).json({ data: null, message: 'internal server error at verify user' + error.message })
    }
}


module.exports = {
    verifyuser
}