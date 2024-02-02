import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    owner: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    symptoms: {
        type: String,
        required: true
    },
    veternarian: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Veternarian'
    }
}, {
    timestamps: true // Adds createdAt and updatedAt fields
});

const Patient = mongoose.model('Patient', patientSchema);

export default Patient;