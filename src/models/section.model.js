const { default: mongoose } = require("mongoose");


const sectionschema = mongoose.Schema({
    course_id:{
        type:mongoose.Types.ObjectId,
        ref:'courses',
        require:true
    },
    name:{
        type:String,
        require:true
    },
    order_no:{
        type:Number,
        require:true
    },
    isactive:{
        type:Boolean,
        default:true
    }
},{
    timestamps:true,
    versionKey:false
})

const section = mongoose.model('section',sectionschema);
module.exports = section;