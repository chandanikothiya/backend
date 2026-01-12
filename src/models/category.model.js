const { default: mongoose, version } = require("mongoose");


const categoryschema = mongoose.Schema(
    {
        name: {
            type: String,
            unique: true,
            trim: true
        },
        description: {
            type: String
        },
        parent_category_id: {
            type: mongoose.Types.ObjectId,
            ref: 'categories',
            default: null
        },
        category_img: {
            type: String
        },
        isactive: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const categories = mongoose.model('categories', categoryschema)

module.exports = categories