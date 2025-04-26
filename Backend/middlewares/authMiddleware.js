// middlewares/authMiddleware.js
const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
  let token = req.headers['x-access-token'] || req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'No token provided.' });
  }

  // Si tiene "Bearer ", lo quitamos
  if (token.startsWith('Bearer ')) {
    token = token.slice(7, token.length);
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) return res.status(401).json({ message: 'Token inválido.' });
      req.userId = decoded.id; // ✅ Aquí extraemos el id guardado en el token
      next();
    });
  } catch (error) {
    res.status(500).json({ message: 'Error al verificar el token.' });
  }
};
