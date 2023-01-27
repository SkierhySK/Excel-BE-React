// require de las librerías
const express = require('express');
const mongoose = require('mongoose');
const tableRoutes = require('./routes/excel');
const cors = require('cors');
require('dotenv').config();

// crear el servidor de express
const app = express();
const port = process.env.PORT || 9000;

app.use(
	cors({
		origin: '*',
	})
);
// middlewares
app.use(express.json());
app.use('/api', tableRoutes);

// routes
app.get('/', (req, res) => {
	res.send('Mi Api de Excel');
});

// conectar a la base de datos de mongodb
mongoose
	.connect(process.env.MONGODB_URI)
	.then(() => console.log('Conectado a la base de datos en MongoDB Atlas'))
	.catch((error) => console.error(error));
// iniciar el servidor
app.listen(port, () => console.log('Server con el puerto', port));
