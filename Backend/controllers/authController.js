// controllers/authController.js
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.register = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
    }

    const userExists = await User.findOne({ where: { email } });
    if (userExists) {
      return res.status(400).json({ message: 'El correo ya está registrado.' });
    }

    const newUser = await User.create({ firstName, lastName, email, password });
    res.status(201).json({ message: 'Usuario registrado exitosamente.', user: newUser });

  } catch (error) {
    console.error('ERROR EN REGISTRO:', error); // 🔥 Muestra error exacto en consola
    res.status(500).json({ message: 'Error al registrar usuario.', error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado.' });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ message: 'Contraseña incorrecta.' });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ message: 'Login exitoso', token });
  } catch (error) {
    console.error('ERROR EN LOGIN:', error); // 🔥 Muestra error exacto en consola
    res.status(500).json({ message: 'Error al iniciar sesión.', error: error.message });
  }
};
