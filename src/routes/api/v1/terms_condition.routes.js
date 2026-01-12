const express = require('express')
const router = express.Router();

//http://localhost:8080/api/v1/termscondition/getallTermsCondition
router.get('/getallTermsCondition',(req,res) => {
    res.status(200).json({message:'all TermsCondition fetch'})
})


router.get('/getTermsCondition',(req,res) => {
    res.status(200).json({id:1,name:'uiux'})
})


router.post('/addTermsCondition',(req,res) => {
    console.log(req.body);
    res.status(200).json({message:'add new TermsCondition'})
})


router.put('/updateTermsCondition/:id',(req,res) => {
    console.log(req.params.id)
    res.status(200).json({message:'update TermsCondition'})
})


router.delete('/deleteTermsCondition/:id',(req,res) => {
    console.log(req.params.id)
    res.status(200).json({message:'delete TermsCondition'})
})

module.exports = router