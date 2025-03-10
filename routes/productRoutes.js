const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');

// Define routes for products
router.get('/', productController.getAllProducts); // GET all products
router.get('/:id', productController.getProductById); // GET product by ID
router.post('/', productController.createProduct); // POST create a new product
router.put('/:id', productController.updateProduct); // PUT update product by ID
router.delete('/:id', productController.deleteProduct); // DELETE product by ID

module.exports = router;