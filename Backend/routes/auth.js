// routes/auth.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Ruta para registro
router.post('/register', authController.register);

// Ruta para login
router.post('/login', authController.login);

module.exports = router;
