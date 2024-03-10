const categoryController = require('./../controllers/categoryController');
const express = require('express');

const router = express.Router();

//Category
router.post('/category/all', categoryController.getAllCategory);
router.post('/category/create', categoryController.createCategory);
router.post('/category/update', categoryController.updateCategory);
router.post('/category/delete', categoryController.deleteCategory);

module.exports = router;
