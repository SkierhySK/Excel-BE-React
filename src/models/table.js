const { Schema, model } = require('mongoose');

// esqueleto de la tabla
const tableSchema = Schema({
	Tabla: [
		{
			Date: {
				type: String,
				required: true,
			},
			'Punch In': {
				type: String,
				required: true,
			},
			'Punch Out': {
				type: String,
				required: true,
			},
			'User ID': {
				type: String,
				required: true,
			},
			'User Name': {
				type: String,
				required: true,
			},
		},
	],
});

module.exports = model('Table', tableSchema);
