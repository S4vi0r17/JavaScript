import e from 'express';
import generateJWT from '../helpers/generateJWT.js';
import Veterinarian from '../models/Veterinarian.js';
import generateId from '../helpers/generateID.js';

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
    // console.log(req.veterinarian);
    const { name, email, phone, web } = req.veterinarian;

    res.json({ profile: req.veterinarian });
};

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
        res.json({ message: 'Veterinarian confirmed' });
    } catch (error) {
        res.status(400).json({ error: 'Error confirming veterinarian' });
    }
};

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
};

const forgot = async (req, res) => {
    const { email } = req.body;

    const veterinarian = await Veterinarian.findOne({ email });

    if (!veterinarian) {
        return res.status(400).json({ error: 'Veterinarian does not exist' });
    }

    try {
        const token = generateId();
        veterinarian.token = token;
        await veterinarian.save();
        res.json({
            message:
                'We have sent you an email with instructions to reset your password',
        });
    } catch (error) {
        res.status(400).json({ error: 'Error sending token' });
    }
};

const checkToken = async (req, res) => {
    const { token } = req.params;
    const validToken = await Veterinarian.findOne({ token });

    if (!validToken) {
        return res.status(400).json({ error: 'Invalid token' });
    }

    res.json({ message: 'Token is valid and user exists' });
};

const newPassword = async (req, res) => {
    const { token } = req.params;
    const { password } = req.body;

    const veterinarian = await Veterinarian.findOne({ token });

    if (!veterinarian) {
        return res.status(400).json({ error: 'Invalid token' });
    }

    try {
        // console.log(veterinarian);
        veterinarian.token = null;
        veterinarian.password = password;
        await veterinarian.save();
        res.json({ message: 'Password updated' });
    } catch (error) {
        res.status(400).json({ error: 'Error updating password' });
    }
};

export {
    register,
    profile,
    confirm,
    authProfile,
    forgot,
    checkToken,
    newPassword,
};
