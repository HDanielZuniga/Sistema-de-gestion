const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { verifyToken } = require('../middlewares/authMiddleware')
const { User } = require('../models')

//  Registro de usuario
router.post('/register', async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body

    const userExistente = await User.findOne({ where: { email } })
    if (userExistente) {
      return res.status(400).json({ message: 'El correo ya está registrado' })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const nuevoUsuario = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword
    })

    res.status(201).json({ user: nuevoUsuario })
  } catch (error) {
    console.error(' Error en /register:', error)
    res.status(500).json({ message: 'Error al registrar usuario' })
  }
})

//  Login de usuario
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body

    const usuario = await User.findOne({ where: { email } })
    if (!usuario) {
      console.log(' Usuario no encontrado')
      return res.status(401).json({ message: 'Usuario no encontrado' })
    }

    // Logs para depuración
    console.log(' Contraseña enviada:', password)
    console.log(' Contraseña en BD:', usuario.password)

    const passwordValida = await bcrypt.compare(password, usuario.password)
    console.log(' ¿Coinciden?:', passwordValida)

    if (!passwordValida) {
      return res.status(401).json({ message: 'Contraseña incorrecta' })
    }

    const token = jwt.sign({ id: usuario.id }, process.env.JWT_SECRET, {
      expiresIn: '1h'
    })

    res.status(200).json({ token })
  } catch (error) {
    console.error(' Error en /login:', error)
    res.status(500).json({ message: 'Error al iniciar sesión' })
  }
})

//  Obtener perfil del usuario autenticado
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
    console.error(' Error en /me:', error)
    res.status(500).json({ message: 'Error obteniendo perfil de usuario' })
  }
})

module.exports = router
