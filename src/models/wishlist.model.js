const { default: mongoose } = require("mongoose");

const wishlistschema = mongoose.Schema({
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

const wishlist = mongoose.model('wishlist', wishlistschema)
module.exports = wishlist;