const express = require('express')
const router = express.Router();

//http://localhost:8080/api/v1/wishlist/getallWishlist
router.get('/getallWishlist',(req,res) => {
    res.status(200).json({message:'all Wishlist fetch'})
})


router.get('/getWishlist',(req,res) => {
    res.status(200).json({id:1,name:'uiux'})
})


router.post('/addWishlist',(req,res) => {
    console.log(req.body);
    res.status(200).json({message:'add new Wishlist'})
})


router.put('/updateWishlist/:id',(req,res) => {
    console.log(req.params.id)
    res.status(200).json({message:'update Wishlist'})
})


router.delete('/deleteWishlist/:id',(req,res) => {
    console.log(req.params.id)
    res.status(200).json({message:'delete Wishlist'})
})

module.exports = router