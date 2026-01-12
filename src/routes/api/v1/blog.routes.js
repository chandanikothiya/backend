const express = require('express')
const router = express.Router();

//http://localhost:8080/api/v1/blog/getallBlog
router.get('/getallBlog',(req,res) => {
    res.status(200).json({message:'all Blog fetch'})
})


router.get('/getBlog',(req,res) => {
    res.status(200).json({id:1,name:'uiux'})
})


router.post('/addBlog',(req,res) => {
    console.log(req.body);
    res.status(200).json({message:'add new Blog'})
})


router.put('/updateBlog/:id',(req,res) => {
    console.log(req.params.id)
    res.status(200).json({message:'update Blog'})
})


router.delete('/deleteBlog/:id',(req,res) => {
    console.log(req.params.id)
    res.status(200).json({message:'delete Blog'})
})

module.exports = router