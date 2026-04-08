const express = require('express');
const { categoryController } = require('../../../controller');
const upload = require('../../../middleware/upload');
const auth = require('../../../middleware/auth');
const validation = require('../../../middleware/validationmiddle');
const { addCategorySchema, updateCategorySchema, deleteCategorySchema } = require('../../../validation/category.validation');
const router = express.Router();

//http://localhost:8080/api/v1/category/getallCategory
router.get('/getallCategory',categoryController.getallCategories)


router.get('/getCategory/:id',categoryController.getCategories)


router.get('/getparentCategories',categoryController.getparentCategories)


router.get('/activeCategories',categoryController.activeCategories)


router.post('/addCategory',validation(addCategorySchema),auth(["user","instructore"]),upload.single('category_img'),categoryController.addCategories)


router.put('/updateCategory/:id',validation(updateCategorySchema),auth(["user","instructore"]),upload.single('category_img'),categoryController.updateCategories)


router.delete('/deleteCategory/:id',validation(deleteCategorySchema),auth(["user","instructore"]),categoryController.deleteCategories)

module.exports = router

//,auth(['admin','employe','instructore','user']),