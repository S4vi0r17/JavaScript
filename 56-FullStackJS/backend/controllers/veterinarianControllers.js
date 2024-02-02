import generateJWT from '../helpers/generateJWT.js';
import Veterinarian from '../models/Veterinarian.js';

const register = async (req, res) => {
    console.log(req.body);
    const { name, email, password, phone, web } = req.body;
    // console.log(name);
    // console.log(email);
    // console.log(password);

    // prevent duplicate emails
    const emailExists = await Veterinarian.findOne({ email });

    if (emailExists) {
        return res.status(400).json({ error: 'Email already exists' });
    }

    try {
        const veterinarian = new Veterinarian(req.body);
        const veterinarianSaved = await veterinarian.save();
        res.json(veterinarianSaved);
    } catch (error) {
        res.status(400).json({ error: 'Error registering veterinarian' });
    }
};

const profile = (req, res) => {
    res.send({ message: 'Fetching veterinarian profile' });
}

const confirm = async (req, res) => {
    const { token } = req.params;

    const veterinarian = await Veterinarian.findOne({ token });

    if (!veterinarian) {
        return res.status(400).json({ error: 'Invalid token' });
    }

    try {
        veterinarian.confirmed = true;
        veterinarian.token = null;
        await veterinarian.save();
        res.json({ message: 'Veterinarian confirmed' })
    } catch (error) {
        res.status(400).json({ error: 'Error confirming veterinarian' });
    }
}

// Authenticated veterinarians can update their profile
const authProfile = async (req, res) => {
    const { email, password } = req.body;

    // Check if the veterinarian exists
    const veterinarian = await Veterinarian.findOne({ email });

    if (!veterinarian) {
        return res.status(403).json({ error: 'Veterinarian does not exist' });
    }

    // Check if the veterinarian is confirmed
    if (!veterinarian.confirmed) {
        return res.status(403).json({ error: 'Veterinarian not confirmed' });
    }

    // Check if the password is correct
    const isMatch = await veterinarian.matchPassword(password);

    if (!isMatch) {
        return res.status(403).json({ error: 'Invalid password' });
    }

    // Authenticate the veterinarian
    const token = generateJWT(veterinarian._id);
    res.json({ token });
}

export {
    register,
    profile,
    confirm,
    authProfile
};