const express = require('express');
const router = express.Router();
const CategoryController = require('../controller/categoryController');

// Create a new category
router.post('/categori', CategoryController.createCategory);

// Get all categories
router.get('/categories', CategoryController.getAllCategories);

// Get category by ID
router.get('/categories/:id', CategoryController.getCategoryById);

// Update category by ID
router.put('/categories/:id', CategoryController.updateCategory);

// Delete category by ID
router.delete('/categories/:id', CategoryController.deleteCategory);

module.exports = router;
