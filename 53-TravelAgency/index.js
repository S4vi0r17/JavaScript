import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';

const app = express();

// Connect to database
db.authenticate()
	.then(() => console.log('Database connected'))
	.catch((error) => console.log(error));

// Define port
const port = process.env.PORT || 4000;

// Enable Pug
app.set('view engine', 'pug');

// Get year
app.use((req, res, next) => {

	/*
		req: Lo que enviamos
		res: Lo que Express nos responde
		next: Para que continue con el siguiente middleware
	*/

	// Create new date
	const year = new Date();
	res.locals.actualYear = year.getFullYear();
	res.locals.siteName = 'Travel Agency';
	next(); // return next(); para forzar
});

// Define public folder
app.use(express.static('public'));

// Add router
app.use('/', router);

app.listen(port, () => {
	console.log(`Travel Agency running on port http://localhost:${port}/`);
});
