const express = require('express');
const { quizeController, questionController } = require('../../../controller');
const router = express.Router();

//http://localhost:8080/api/v1/question/addQuestion
router.get('/getallQuestion',questionController.getquestion)


// router.get('/getQuestion',(req,res) => {
//     res.status(200).json({id:1,name:'uiux'})
// })


router.post('/addQuestion',questionController.addquestion)


router.put('/updateQuestion/:id',questionController.updatequestion)


router.delete('/deleteQuestion/:id',questionController.deletequestion)

module.exports = router