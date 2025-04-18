// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const authRoutes = require('./routes/auth');
const morgan = require('morgan');

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));

// Conexión a la base de datos
connectDB().catch((err) => {
  console.error('Error al conectar a la base de datos:', err);
});

// Ruta base
app.get('/', (req, res) => {
  res.send('Backend activo');
});

// Rutas
app.use('/api/auth', authRoutes);

// Servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
