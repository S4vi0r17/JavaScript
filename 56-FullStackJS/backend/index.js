import Express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import VeterinarianRoutes from './routes/veterinarianRoutes.js';
import PatientRoutes from './routes/patientRoutes.js';

const app = new Express();
app.use(Express.json());
dotenv.config();

connectDB();
const permittedOrigins = [process.env.FRONTEND_URL];

const corsOptions = {
	origin: function (origin, callback) {
		if (permittedOrigins.indexOf(origin) !== -1 ) {
			callback(null, true);
		} else {
			callback(new Error('Not allowed by CORS'));
		}
	},
};

app.use(cors(corsOptions));

// console.log(process.env.MONGO_URI);

app.use('/api/veterinarians', VeterinarianRoutes);
app.use('/api/patients', PatientRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
	console.log(`Server running on port http://localhost:${PORT}/`);
});
