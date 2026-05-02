const { default: mongoose } = require("mongoose");

const resultquizeschema = mongoose.Schema({
    course_id: {
        type: mongoose.Types.ObjectId,
        ref: 'courses'
    },
    user_id: {
        type: mongoose.Types.ObjectId,
        ref: 'users'
    },
    quiz_id: {
        type: mongoose.Types.ObjectId,
        ref: 'quizes'
    },
    obtain_marks: {
        type: Number,
        require: true
    },
    total_marks: {
        type: Number,
        require: true
    }
}, {
    timestamps: true,
    versionKey: false
})

const result = mongoose.model('result', resultquizeschema)
module.exports = result;