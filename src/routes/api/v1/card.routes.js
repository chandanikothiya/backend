const express = require('express')
const router = express.Router();

//http://localhost:8080/api/v1/card/getallCard
router.get('/getallCard',(req,res) => {
    res.status(200).json({message:'all Card fetch'})
})


router.get('/getCard',(req,res) => {
    res.status(200).json({id:1,name:'uiux'})
})


router.post('/addCard',(req,res) => {
    console.log(req.body);
    res.status(200).json({message:'add new Card'})
})


router.put('/updateCard/:id',(req,res) => {
    console.log(req.params.id)
    res.status(200).json({message:'update Card'})
})


router.delete('/deleteCard/:id',(req,res) => {
    console.log(req.params.id)
    res.status(200).json({message:'delete Card'})
})

module.exports = router