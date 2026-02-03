const { default: mongoose, version } = require("mongoose");


const registerschema = mongoose.Schema(
    {
        name:{
            type:String,
            unique:true,
            trim:true
        },
        email:{
            type:String,
            trim:true
        },
        password:{
            type:String
        },
        role:{
            type:String,
            default:'student'
        },
        phone_no:{
            type:Number,
        },
        dob:{
            type:Date
        },
        isverify:{
            type:Boolean,
            default:false
        },
        otp:{
            type:Number
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
)

const registeruser = mongoose.model('registeruser',registerschema);

module.exports = registeruser