const express = require('express');
const { sectionController } = require('../../../controller');
const router = express.Router();

//http://localhost:8080/api/v1/section/getallSection
router.get('/getallSection',sectionController.getsection)


router.get('/getSection',(req,res) => {
    res.status(200).json({id:1,name:'uiux'})
})


router.post('/addSection',sectionController.addsection)


router.put('/updateSection/:id',sectionController.updatesection)


router.delete('/deleteSection/:id',sectionController.deletesection)

module.exports = router