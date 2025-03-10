const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

// Define routes for users
router.get('/', userController.getAllUsers); // GET all users
router.get('/:id', userController.getUserById); // GET user by ID
router.post('/', userController.createUser); // POST create a new user
router.put('/:id', userController.updateUser); // PUT update user by ID
router.delete('/:id', userController.deleteUser); // DELETE user by ID

module.exports = router;