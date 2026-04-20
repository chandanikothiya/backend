const { default: mongoose } = require("mongoose");

const contentSchema = mongoose.Schema({
    section_id: {
        type: mongoose.Types.ObjectId,
        ref: 'sections',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    content_file: [
        {
            public_id: {
                type: String
            },
            url: {
                type: String
            }
        }
    ],
    duration: {
        type: String
    },
    order_no: {
        type: Number,
        required: true
    }
},
    {
        timestamps: true,
        versionKey: false
    })

const content = mongoose.model('content', contentSchema)
module.exports = content