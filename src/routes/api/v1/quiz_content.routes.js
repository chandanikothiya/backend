const express = require('express')
const router = express.Router();

//http://localhost:8080/api/v1/quizcontent/getallQuizeContent
router.get('/getallQuizeContent',(req,res) => {
    res.status(200).json({message:'all QuizeContent fetch'})
})


router.get('/getQuizeContent',(req,res) => {
    res.status(200).json({id:1,name:'uiux'})
})


router.post('/addQuizeContent',(req,res) => {
    console.log(req.body);
    res.status(200).json({message:'add new QuizeContent'})
})


router.put('/updateQuizeContent/:id',(req,res) => {
    console.log(req.params.id)
    res.status(200).json({message:'update QuizeContent'})
})


router.delete('/deleteQuizeContent/:id',(req,res) => {
    console.log(req.params.id)
    res.status(200).json({message:'delete QuizeContent'})
})

module.exports = router