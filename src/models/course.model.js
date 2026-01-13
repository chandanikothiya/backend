const { default: mongoose} = require("mongoose");


const courseschema = mongoose.Schema(
    {
        category_id: {
            type: mongoose.Types.ObjectId,
            ref: 'categories'
        },
        // instructor_id:{

        // },
        name: {
            type: String,
            unique: true,
            trim: true
        },
        description: {
            type: String
        },
        price: {
            type: Number
        },
        week_no: {
            type: Number
        },
        course_img: {
            type: String
        },
        preview_url: {
            type: String
        },
        isactive: {
            type: Boolean,
            defalut: true
        }
    },
    {
        timestamp:true,
        versionKey:false
    }
)

const courses = mongoose.model('courses',courseschema)

module.exports = courses