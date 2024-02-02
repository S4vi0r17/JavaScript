import Express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import VeterinarianRoutes from './routes/veterinarianRoutes.js';
import PatientRoutes from './routes/patientRoutes.js';

const app = new Express();
app.use(Express.json());
dotenv.config();

connectDB();

// console.log(process.env.MONGO_URI);

app.use('/api/veterinarians', VeterinarianRoutes);
app.use('/api/patients', PatientRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
	console.log(`Server running on port http://localhost:${PORT}/`);
});
