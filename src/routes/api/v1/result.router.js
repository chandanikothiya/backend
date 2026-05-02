const express = require('express');
const { resultController } = require('../../../controller');
const router = express.Router();

//http://localhost:8080/api/v1/result/getallResult
router.get('/getallresult',resultController.getallresult)


router.get('/getresult/:id',resultController.getresult)


router.post('/addresult',resultController.addresult)


router.put('/updateResult/:id',(req,res) => {
    console.log(req.params.id)
    res.status(200).json({message:'update Result'})
})


router.delete('/deleteResult/:id',(req,res) => {
    console.log(req.params.id)
    res.status(200).json({message:'delete Result'})
})

module.exports = router