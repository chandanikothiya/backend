const { default: mongoose } = require("mongoose");

const questionschema = mongoose.Schema({
    quiz_id: {
        type: mongoose.Types.ObjectId,
        ref: 'quizes'
    },
    questions: [
        {
            question: {
                type: String
            },
            options: [{
                type: String
            }
            ],
            answer:{
                type:String
            }
        }
    ]
}, {
    timestamps: true,
    versionKey: false
})

const question = mongoose.model('question', questionschema)
module.exports = question;