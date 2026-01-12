const express = require('express')
const router = express.Router();

//http://localhost:8080/api/v1/result/getallResult
router.get('/getallResult',(req,res) => {
    res.status(200).json({message:'all Result fetch'})
})


router.get('/getResult',(req,res) => {
    res.status(200).json({id:1,name:'uiux'})
})


router.post('/addResult',(req,res) => {
    console.log(req.body);
    res.status(200).json({message:'add new Result'})
})


router.put('/updateResult/:id',(req,res) => {
    console.log(req.params.id)
    res.status(200).json({message:'update Result'})
})


router.delete('/deleteResult/:id',(req,res) => {
    console.log(req.params.id)
    res.status(200).json({message:'delete Result'})
})

module.exports = router