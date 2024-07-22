const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.post('/register', userController.createUser);
router.get('/users', userController.getAllUsers);

module.exports = router;