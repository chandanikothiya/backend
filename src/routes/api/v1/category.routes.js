const express = require('express');
const { categoryController } = require('../../../controller');
const upload = require('../../../middleware/upload');
const router = express.Router();

//http://localhost:8080/api/v1/category/getallCategory
router.get('/getallCategory',categoryController.getallCategories)


router.get('/getCategory/:id',categoryController.getCategories)


router.post('/addCategory',upload.single('category_img'),categoryController.addCategories)


router.put('/updateCategory/:id',categoryController.updateCategories)


router.delete('/deleteCategory/:id',categoryController.deleteCategories)

module.exports = router