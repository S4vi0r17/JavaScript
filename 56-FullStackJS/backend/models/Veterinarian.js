import mongoose from 'mongoose';
import generateId from '../helpers/generateID.js';

const VeterinarianSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    phone: {
        type: String,
        default: null,
        trim: true
    },
    web: {
        type: String,
        default: null,
    },
    token: {
        type: String,
        default: generateId()
    },
    confirmed: {
        type: Boolean,
        default: false
    },
});

const Veterinarian = mongoose.model('Veterinarian', VeterinarianSchema);

export default Veterinarian;