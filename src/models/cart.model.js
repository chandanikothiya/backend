const { default: mongoose } = require("mongoose");

const cartschema = mongoose.Schema({
    user_id: {
        type: mongoose.Types.ObjectId,
        ref: 'users'
    },
    course: [
        {
            course_id: {
                type: mongoose.Types.ObjectId,
                ref: 'courses'
            }
        }
    ]
}, {
    timestamps: true,
    versionKey: false
})

const cart = mongoose.model('cart', cartschema)
module.exports = cart;