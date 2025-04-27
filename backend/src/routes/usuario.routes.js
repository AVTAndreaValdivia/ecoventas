// routes/usuario.routes.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/usuario.controller');

// Obtener todos los usuarios
router.get('/', controller.getUsuarios);

// Obtener un usuario por ID
router.get('/:id', controller.getUsuarioPorId);

// Crear un nuevo usuario
router.post('/', controller.createUsuario);

// Actualizar un usuario existente
router.put('/:id', controller.updateUsuario);

// Eliminar un usuario
router.delete('/:id', controller.deleteUsuario);

module.exports = router;
