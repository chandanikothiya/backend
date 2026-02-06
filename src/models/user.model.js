const { default: mongoose, version } = require("mongoose");


const registerschema = mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String
        },
        role: {
            type: String,
            default: 'user'
        },
        phone_no: {
            type: String
        },
        dob: {
            type: String
        },
        profileid: {
            type: String
        },
        gender: {
            type: String
        },
        isverify: {
            type: Boolean,
            default: false
        },
        otp: {
            type: Number
        },
        refreshtoken: {
            type: String
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const registeruser = mongoose.model('users', registerschema);

module.exports = registeruser