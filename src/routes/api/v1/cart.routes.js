const express = require('express')
const router = express.Router();

//http://localhost:8080/api/v1/cart/getallCart
router.get('/getallCart',(req,res) => {
    res.status(200).json({message:'all Cart fetch'})
})


router.get('/getCart',(req,res) => {
    res.status(200).json({id:1,name:'uiux'})
})


router.post('/addCart',(req,res) => {
    console.log(req.body);
    res.status(200).json({message:'add new Cart'})
})


router.put('/updateCart/:id',(req,res) => {
    console.log(req.params.id)
    res.status(200).json({message:'update Cart'})
})


router.delete('/deleteCart/:id',(req,res) => {
    console.log(req.params.id)
    res.status(200).json({message:'delete Cart'})
})

module.exports = router