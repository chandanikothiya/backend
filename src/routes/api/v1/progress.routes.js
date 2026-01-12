const express = require('express')
const router = express.Router();

//http://localhost:8080/api/v1/progress/getallProgress
router.get('/getallProgress',(req,res) => {
    res.status(200).json({message:'all Progress fetch'})
})


router.get('/getProgress',(req,res) => {
    res.status(200).json({id:1,name:'uiux'})
})


router.post('/addProgress',(req,res) => {
    console.log(req.body);
    res.status(200).json({message:'add new Progress'})
})


router.put('/updateProgress/:id',(req,res) => {
    console.log(req.params.id)
    res.status(200).json({message:'update Progress'})
})


router.delete('/deleteProgress/:id',(req,res) => {
    console.log(req.params.id)
    res.status(200).json({message:'delete Progress'})
})

module.exports = router