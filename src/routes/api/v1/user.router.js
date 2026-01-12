const express = require('express')
const router = express.Router();

//http://localhost:8080/api/v1/user/getallUser
router.get('/getallUser',(req,res) => {
    res.status(200).json({message:'all User fetch'})
})


router.get('/getUser',(req,res) => {
    res.status(200).json({id:1,name:'uiux'})
})


router.post('/addUser',(req,res) => {
    console.log(req.body);
    res.status(200).json({message:'add new User'})
})


router.put('/updateUser/:id',(req,res) => {
    console.log(req.params.id)
    res.status(200).json({message:'update User'})
})


router.delete('/deleteUser/:id',(req,res) => {
    console.log(req.params.id)
    res.status(200).json({message:'delete User'})
})

module.exports = router