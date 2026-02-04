const { default: mongoose, version } = require("mongoose");


const registerschema = mongoose.Schema(
    {
        name:{
            type:String,
            trim:true,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            require:true
        },
        role:{
            type:String,
            default:'student'
        },
        phone_no:{
            type:Number,
        },
        dob:{
            type:String,
            required:true
        },
        gender:{
            type:String,
            required:true
        },
        isverify:{
            type:Boolean,
            default:false
        },
        otp:{
            type:Number
        },
        refreshtoken:{
            type:String
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
)

const registeruser = mongoose.model('users',registerschema);

module.exports = registeruser