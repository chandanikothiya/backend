const express = require('express')
const router = express.Router();

//http://localhost:8080/api/v1/content/getallContent
router.get('/getallContent',(req,res) => {
    res.status(200).json({message:'all Content fetch'})
})


router.get('/getContent',(req,res) => {
    res.status(200).json({id:1,name:'uiux'})
})


router.post('/addContent',(req,res) => {
    console.log(req.body);
    res.status(200).json({message:'add new Content'})
})


router.put('/updateContent/:id',(req,res) => {
    console.log(req.params.id)
    res.status(200).json({message:'update Content'})
})


router.delete('/deleteContent/:id',(req,res) => {
    console.log(req.params.id)
    res.status(200).json({message:'delete Content'})
})

module.exports = router