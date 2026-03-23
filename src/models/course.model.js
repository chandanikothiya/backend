const { default: mongoose } = require("mongoose");


const courseschema = mongoose.Schema(
    {
        category: {
            type: mongoose.Types.ObjectId,
            ref: 'categories',
            required: true
        },
        // instructor_id:{
        //     type: mongoose.Types.ObjectId,
        //     ref: 'users',
        //     required:true
        // },
        name: {
            type: String,
            trim: true,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        week_no: {
            type: Number,
            required: true
        },
        course_img: {
            type: String,
            required: true
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

const courses = mongoose.model('courses', courseschema)

module.exports = courses