const express = require('express')
const router = express.Router();

//http://localhost:8080/api/v1/review/getallReview
router.get('/getallReview',(req,res) => {
    res.status(200).json({message:'all Review fetch'})
})


router.get('/getReview',(req,res) => {
    res.status(200).json({id:1,name:'uiux'})
})


router.post('/addReview',(req,res) => {
    console.log(req.body);
    res.status(200).json({message:'add new Review'})
})


router.put('/updateReview/:id',(req,res) => {
    console.log(req.params.id)
    res.status(200).json({message:'update Review'})
})


router.delete('/deleteReview/:id',(req,res) => {
    console.log(req.params.id)
    res.status(200).json({message:'delete Review'})
})

module.exports = router