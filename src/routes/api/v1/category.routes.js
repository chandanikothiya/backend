const express = require('express');
const { categoryController } = require('../../../controller');
const upload = require('../../../middleware/upload');
const auth = require('../../../middleware/auth');
const router = express.Router();

//http://localhost:8080/api/v1/category/getallCategory
router.get('/getallCategory',auth,categoryController.getallCategories)


router.get('/getCategory/:id',categoryController.getCategories)


router.get('/getparentCategories',categoryController.getparentCategories)


router.get('/activeCategories',categoryController.activeCategories)


router.post('/addCategory',upload.single('category_img'),categoryController.addCategories)


router.put('/updateCategory/:id',upload.single('category_img'),categoryController.updateCategories)


router.delete('/deleteCategory/:id',categoryController.deleteCategories)

module.exports = router