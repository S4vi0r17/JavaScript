import Patient from '../models/Patient.js';
import mongoose from 'mongoose';

const addPatient = async (req, res) => {
    const patient = new Patient(req.body);
    patient.veterinarian = req.veterinarian._id;

    try {
        const newPatient = await patient.save();
        res.status(201).json(newPatient);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

const getPatients = async (req, res) => {
    // const patients = await Patient.find({ veterinarian: req.veterinarian._id });
    const patients = await Patient.find()
        .where('veterinarian')
        .equals(req.veterinarian._id);
    res.status(200).json(patients);
};

const getPatient = async (req, res) => {
    const { id } = req.params;
    const patient = await Patient.findById(id);

    if (!patient) {
        return res.status(404).json({ message: 'Patient not found' });
    }

    if (
        patient.veterinarian._id.toString() !== req.veterinarian._id.toString()
    ) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    res.status(200).json(patient);
};

const updatePatient = async (req, res) => {
    const { id } = req.params;
    const patient = await Patient.findById(id);

    if (!patient) {
        return res.status(404).json({ message: 'Patient not found' });
    }

    if (
        patient.veterinarian._id.toString() !== req.veterinarian._id.toString()
    ) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    // Update patient
    patient.name = req.body.name || patient.name;
    patient.owner = req.body.owner || patient.owner;
    patient.email = req.body.email || patient.email;
    patient.date = req.body.date || patient.date;
    patient.symptoms = req.body.symptoms || patient.symptoms;

    try {
        const updatedPatient = await patient.save();
        res.status(200).json(updatedPatient);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

const deletePatient = async (req, res) => {
    const { id } = req.params;

    // Check if the id is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
        const error = new Error('Id no válido');
        return res.status(403).json({ msg: error.message });
    }

    /*
        if(id.length !== 24) {
            return res.status(403).json({
                message: 'Id no válido'
            });
        } else {
            // Pasamos la validación, buscamos al paciente
            const paciente = await Paciente.findById(id);
            if(!paciente) {
                return res.status(404).json({
                    message: 'Paciente no encontrado'
                });
            }
    */

    const patient = await Patient.findById(id);

    if (!patient) {
        return res.status(404).json({ message: 'Patient not found' });
    }

    if (
        patient.veterinarian._id.toString() !== req.veterinarian._id.toString()
    ) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        await patient.deleteOne();
        res.status(200).json({ message: 'Patient deleted' });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export { addPatient, getPatients, getPatient, updatePatient, deletePatient };
