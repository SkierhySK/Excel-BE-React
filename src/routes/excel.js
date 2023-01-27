// require de las librerías
const express = require('express');
const tableSchema = require('../models/table');
const router = express.Router();

// crear tablas
router.post('/tablas', (req, res) => {
	const tabla = tableSchema(req.body);
	tabla
		.save()
		.then((data) => res.status(201).json(data))
		.catch((error) => res.status(404).json({ message: error }));
});

// listar las tablas
router.get('/tablas', (req, res) => {
	tableSchema
		.find()
		.then((data) => res.status(200).json(data))
		.catch((error) => res.status(404).json({ message: error }));
});

// seleccionar una tabla
router.get('/tablas/:id', (req, res) => {
	const { id } = req.params;
	tableSchema
		.findById(id)
		.then((data) => res.status(200).json(data))
		.catch((error) => res.status(404).json({ message: error }));
});

// eliminar una tabla
router.delete('/tablas/:id', (req, res) => {
	const { id } = req.params;
	tableSchema
		.remove({ _id: id })
		.then((data) => res.status(200).json(data))
		.catch((error) => res.status(404).json({ message: error }));
});

// actualizar una tabla
router.put('/tablas/:id', (req, res) => {
	const { id } = req.params;
	const { Tabla } = req.body;
	console.log(Tabla);
	tableSchema
		.updateOne({ _id: id }, { $set: { Tabla } })
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
});

module.exports = router;
