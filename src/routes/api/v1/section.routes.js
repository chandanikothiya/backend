const express = require('express')
const router = express.Router();

//http://localhost:8080/api/v1/section/getallSection
router.get('/getallSection',(req,res) => {
    res.status(200).json({message:'all Section fetch'})
})


router.get('/getSection',(req,res) => {
    res.status(200).json({id:1,name:'uiux'})
})


router.post('/addSection',(req,res) => {
    console.log(req.body);
    res.status(200).json({message:'add new Section'})
})


router.put('/updateSection/:id',(req,res) => {
    console.log(req.params.id)
    res.status(200).json({message:'update Section'})
})


router.delete('/deleteSection/:id',(req,res) => {
    console.log(req.params.id)
    res.status(200).json({message:'delete Section'})
})

module.exports = router