import Express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

const app = new Express();
dotenv.config();

connectDB();

// console.log(process.env.MONGO_URI);

app.use('/', (req, res) => {
	res.send('Hello World');
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
	console.log(`Server running on port http://localhost:${PORT}/`);
});
