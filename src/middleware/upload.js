const multer = require("multer")
const path = require("path")
const fs = require("fs")

const storage = multer.diskStorage({
  destination: function (req, file, cb) {

    console.log("mfile",file)

    const filepath = path.join('public','images',file.fieldname)

    // fs.mkdir(filepath,{recursive:true},(error) => {
    //     console.log(error)
    // })
    
    // cb(null, filepath) //cb is callback function first argument is for error and second is path,filename
    cb(null, '/tmp')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, uniqueSuffix + '-' + file.originalname)
  }
})

const upload = multer({ storage: storage })

module.exports = upload