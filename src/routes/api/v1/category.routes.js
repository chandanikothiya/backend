const express = require('express');
const { categoryController } = require('../../../controller');
const router = express.Router();

//http://localhost:8080/api/v1/category/getallCategory
router.get('/getallCategory',(req,res) => {
    res.status(200).json({message:'all category fetch'})
})


router.get('/getCategory',(req,res) => {
    res.status(200).json({id:1,name:'uiux'})
})


router.post('/addCategory',categoryController.addCategories)


router.put('/updateCategory/:id',(req,res) => {
    console.log(req.params.id)
    res.status(200).json({message:'update category'})
})


router.delete('/deleteCategory/:id',(req,res) => {
    console.log(req.params.id)
    res.status(200).json({message:'delete category'})
})

module.exports = router