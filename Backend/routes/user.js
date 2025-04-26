const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middlewares/authMiddleware');
const User = require('../models/User');

router.get('/me', verifyToken, async (req, res) => {
  try {
    const user = await User.findByPk(req.userId, {
      attributes: ['id', 'firstName', 'lastName', 'email']
    });

    if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });

    res.json({
      id: user.id,
      fullName: `${user.firstName} ${user.lastName}`,
      email: user.email
    });
  } catch (error) {
    console.error('Error buscando usuario:', error);
    res.status(500).json({ message: 'Error del servidor' });
  }
});

module.exports = router;
