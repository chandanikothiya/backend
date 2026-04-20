const express = require('express');
const { contentController } = require('../../../controller');
const router = express.Router();
const upload = require('../../../middleware/upload');


//http://localhost:8080/api/v1/content/getallContent
// router.get('/getallContent',(req,res) => {
//     res.status(200).json({message:'all Content fetch'})
// })

router.get('/getallContent',contentController.getcontent)

//router.get('/getContent',contentController.getcontent)


router.post('/addContent',upload.array('content_file', 10),contentController.addcontent)


router.put('/updateContent/:id',upload.array('content_file', 10),contentController.editcontent)


router.delete('/deleteContent/:id',contentController.deletecontent)

module.exports = router