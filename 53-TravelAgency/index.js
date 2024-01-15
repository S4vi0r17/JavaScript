import express from 'express';
import router from './routes/index.js';

const app = express();

// Definir puerto
const port = process.env.PORT || 4000;

// Add router
app.use('/', router);

app.listen(port, () => {
	console.log(`Travel Agency running on port ${port}`);
});
