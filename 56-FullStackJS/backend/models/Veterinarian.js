import mongoose from 'mongoose';

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
        type: String
    },
    confirmed: {
        type: Boolean,
        default: false
    },
});

const Veterinarian = mongoose.model('Veterinarian', VeterinarianSchema);

export default Veterinarian;