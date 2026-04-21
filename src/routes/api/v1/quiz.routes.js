const express = require('express');
const { quizeController } = require('../../../controller');
const router = express.Router();

//http://localhost:8080/api/v1/quiz/getallQuize
router.get('/getallQuize',quizeController.getquize)


router.get('/getQuize',(req,res) => {
    res.status(200).json({id:1,name:'uiux'})
})


router.post('/addQuize',quizeController.addquize)


router.put('/updateQuize/:id',quizeController.updatequize)


router.delete('/deleteQuize/:id',quizeController.deletequize)

module.exports = router