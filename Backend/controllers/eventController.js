const { Event } = require('../models')

// Crear un nuevo evento asociado al usuario autenticado
const createEvent = async (req, res) => {
  try {
    const userId = req.userId // <- Se extrae desde el middleware
    const { nombre, fecha, lugar, cantidad } = req.body

    if (!nombre || !fecha || !lugar || !cantidad) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios.' })
    }

    const nuevoEvento = await Event.create({
      nombre,
      fecha,
      lugar,
      cantidad,
      userId
    })

    return res.status(201).json({
      message: 'Evento creado correctamente.',
      evento: nuevoEvento
    })
  } catch (error) {
    console.error(' Error al crear el evento:', error)
    return res.status(500).json({ error: error.message || 'Error interno del servidor.' })
  }
}

// Obtener todos los eventos del usuario autenticado
const getEvents = async (req, res) => {
  try {
    const userId = req.userId

    const eventos = await Event.findAll({
      where: { userId },
      order: [['createdAt', 'DESC']]
    })

    return res.status(200).json(eventos)
  } catch (error) {
    console.error(' Error al obtener los eventos:', error)
    return res.status(500).json({ error: error.message || 'Error interno del servidor.' })
  }
}

// Actualizar un evento específico
const updateEvent = async (req, res) => {
  try {
    const userId = req.userId
    const eventId = req.params.id
    const { nombre, fecha, lugar, cantidad } = req.body

    const evento = await Event.findOne({ where: { id: eventId, userId } })

    if (!evento) {
      return res.status(404).json({ error: 'Evento no encontrado o no autorizado.' })
    }

    evento.nombre = nombre
    evento.fecha = fecha
    evento.lugar = lugar
    evento.cantidad = cantidad
    await evento.save()

    return res.status(200).json({ message: 'Evento actualizado.', evento })
  } catch (error) {
    console.error(' Error al actualizar el evento:', error)
    return res.status(500).json({ error: error.message || 'Error interno del servidor.' })
  }
}

// Eliminar un evento específico
const deleteEvent = async (req, res) => {
  try {
    const userId = req.userId
    const eventId = req.params.id

    const evento = await Event.findOne({ where: { id: eventId, userId } })

    if (!evento) {
      return res.status(404).json({ error: 'Evento no encontrado o no autorizado.' })
    }

    await evento.destroy()

    return res.status(200).json({ message: 'Evento eliminado correctamente.' })
  } catch (error) {
    console.error(' Error al eliminar el evento:', error)
    return res.status(500).json({ error: error.message || 'Error interno del servidor.' })
  }
}

module.exports = {
  createEvent,
  getEvents,
  updateEvent,
  deleteEvent
}
