const express = require('express')
const router = express.Router()
const { createEvent, getEvents, updateEvent, deleteEvent } = require('../controllers/eventController')
const { verifyToken } = require('../middlewares/authMiddleware')

// Crear evento
router.post('/', verifyToken, createEvent)

// Obtener eventos
router.get('/', verifyToken, getEvents)

// Actualizar evento
router.put('/:id', verifyToken, updateEvent)

// Eliminar evento
router.delete('/:id', verifyToken, deleteEvent)

module.exports = router
