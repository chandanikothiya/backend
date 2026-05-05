const { required } = require("joi");
const { default: mongoose } = require("mongoose");

const couponeschema = mongoose.Schema({
    code: {
        type: String,
        required:true
    },
    discount: {
        type: Number,
        required:true
    },
    expirydate: {
        type: String,
        required:true
    },
    description: {
        type: String,
        require: true
    },
    stock: {
        type: Number,
        require: true
    }
}, {
    timestamps: true,
    versionKey: false
})

const coupon = mongoose.model('coupon', couponeschema)
module.exports = coupon;