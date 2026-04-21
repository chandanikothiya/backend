const { default: mongoose } = require("mongoose");

const quizeschema = mongoose.Schema({
    course_id: {
        type: mongoose.Types.ObjectId,
        ref: 'courses'
    },
    section_id: {
        type: mongoose.Types.ObjectId,
        ref: 'sections'
    },
    name: {
        type: String,
        require:true
    },
    description: {
        type: String,
        require:true
    },
    time: {
        type: String,
        require:true
    }
}, {
    timestamps: true,
    versionKey: false
})

const quize = mongoose.model('quize',quizeschema)
module.exports = quize;