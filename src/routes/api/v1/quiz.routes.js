const express = require('express')
const router = express.Router();

//http://localhost:8080/api/v1/quiz/getallQuize
router.get('/getallQuize',(req,res) => {
    res.status(200).json({message:'all Quize fetch'})
})


router.get('/getQuize',(req,res) => {
    res.status(200).json({id:1,name:'uiux'})
})


router.post('/addQuize',(req,res) => {
    console.log(req.body);
    res.status(200).json({message:'add new Quize'})
})


router.put('/updateQuize/:id',(req,res) => {
    console.log(req.params.id)
    res.status(200).json({message:'update Quize'})
})


router.delete('/deleteQuize/:id',(req,res) => {
    console.log(req.params.id)
    res.status(200).json({message:'delete Quize'})
})

module.exports = router