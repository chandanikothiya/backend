const { default: mongoose } = require("mongoose");


const demoschema = mongoose.Schema(
    {
       
        demo_img: [{
            // type:String
            public_id:{
                type:String
            },
            url:{
                type:String
            }
        }],
        demo_video: {
            // type:String
            public_id:{
                type:String
            },
            url:{
                type:String
            }
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

const demo = mongoose.model('demo', demoschema)

module.exports = demo