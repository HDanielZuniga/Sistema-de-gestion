const express = require('express')
const router = express.Router()
const { verifyToken } = require('../middlewares/authMiddleware')
const { User } = require('../models')

// ... otras rutas como login/register aquí ...

// ✅ Ruta para obtener perfil del usuario autenticado
router.get('/me', verifyToken, async (req, res) => {
  try {
    const user = await User.findByPk(req.userId, {
      attributes: ['firstName', 'lastName', 'email']
    })

    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' })
    }

    res.status(200).json(user)
  } catch (error) {
    console.error('❌ Error en /me:', error)
    res.status(500).json({ message: 'Error obteniendo perfil de usuario' })
  }
})

module.exports = router
