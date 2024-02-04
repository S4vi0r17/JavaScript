import e from 'express';
import generateJWT from '../helpers/generateJWT.js';
import Veterinarian from '../models/Veterinarian.js';
import generateId from '../helpers/generateID.js';
import emailRegister from '../helpers/emailRegister.js';
import emailForgot from '../helpers/emailForgotPassword.js';

const register = async (req, res) => {
    console.log(req.body);
    const { name, email, password, phone, web } = req.body;
    // console.log(name);
    // console.log(email);
    // console.log(password);

    // prevent duplicate emails
    const emailExists = await Veterinarian.findOne({ email });

    if (emailExists) {
        return res.status(400).json({ msg: 'Email already exists' });
    }

    try {
        const veterinarian = new Veterinarian(req.body);
        const veterinarianSaved = await veterinarian.save();

        // Send email to the veterinarian
        emailRegister({
            email: veterinarianSaved.email,
            token: veterinarianSaved.token,
            name: veterinarianSaved.name
        })

        res.json(veterinarianSaved);

    } catch (error) {
        res.status(400).json({ msg: 'Error registering veterinarian' });
    }
};

const profile = (req, res) => {
    // console.log(req.veterinarian);
    const { veterinarian } = req;

    res.json({ veterinarian });
};

const confirm = async (req, res) => {
    const { token } = req.params;

    const veterinarian = await Veterinarian.findOne({ token });

    if (!veterinarian) {
        return res.status(400).json({ msg: 'Invalid token' });
    }

    try {
        veterinarian.confirmed = true;
        veterinarian.token = null;
        await veterinarian.save();
        res.json({ msg: 'Veterinarian confirmed' });
    } catch (error) {
        res.status(400).json({ msg: 'Error confirming veterinarian' });
    }
};

// Authenticated veterinarians can update their profile
const authProfile = async (req, res) => {
    const { email, password } = req.body;

    // Check if the veterinarian exists
    const veterinarian = await Veterinarian.findOne({ email });

    if (!veterinarian) {
        return res.status(403).json({ msg: 'Veterinarian does not exist' });
    }

    // Check if the veterinarian is confirmed
    if (!veterinarian.confirmed) {
        return res.status(403).json({ msg: 'Veterinarian not confirmed' });
    }

    // Check if the password is correct
    const isMatch = await veterinarian.matchPassword(password);

    if (!isMatch) {
        return res.status(403).json({ msg: 'Invalid password' });
    }

    // Authenticate the veterinarian
    // const token = generateJWT(veterinarian._id);
    // res.json({ token });
    veterinarian.token = generateJWT(veterinarian._id);
    res.json({ 
        _id: veterinarian._id,
        name: veterinarian.name,
        email: veterinarian.email,
        token : veterinarian.token
     });
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

        // Send email to the veterinarian
        emailForgot({
            email: veterinarian.email,
            token: veterinarian.token,
            name: veterinarian.name
        })

        res.json({
            msg:
                'We have sent you an email with instructions to reset your password',
        });
    } catch (error) {
        res.status(400).json({ msg: 'Error sending token' });
    }
};

const checkToken = async (req, res) => {
    const { token } = req.params;
    const validToken = await Veterinarian.findOne({ token });

    if (!validToken) {
        return res.status(400).json({ msg: 'Invalid token' });
    }

    res.json({ msg: 'Token is valid and user exists' });
};

const newPassword = async (req, res) => {
    const { token } = req.params;
    const { password } = req.body;

    const veterinarian = await Veterinarian.findOne({ token });

    if (!veterinarian) {
        return res.status(400).json({ msg: 'Invalid token' });
    }

    try {
        // console.log(veterinarian);
        veterinarian.token = null;
        veterinarian.password = password;
        await veterinarian.save();
        res.json({ msg: 'Password updated' });
    } catch (error) {
        res.status(400).json({ msg: 'Error updating password' });
    }
};

const updateProfile = async (req, res) => {
    const veterinarian = await Veterinarian.findById(req.params.id);
    if (!veterinarian) {
        return res.status(400).json({ msg: 'Veterinarian not found' });
    }

    const { email } = req.body;

    if (veterinarian.email !== req.body.email) {
        const emailExists = await Veterinarian.findOne({ email
        });
        if (emailExists) {
            return res.status(400).json({ msg: 'Email already exists' });
        }
    }

    try {
        // const updatedVeterinarian = await Veterinarian.findByIdAndUpdate(
        //     req.params.id,
        //     req.body,
        //     { new: true }
        // );
        // res.json(updatedVeterinarian);
        veterinarian.name = req.body.name
        veterinarian.email = req.body.email
        veterinarian.phone = req.body.phone
        veterinarian.web = req.body.web

        const updatedVeterinarian = await veterinarian.save();
        res.json(updatedVeterinarian);
    } catch (error) {
        res.status(400).json({ msg: 'Error updating veterinarian' });
    }
}

const updatePassword = async (req, res) => {
    const {id} = req.veterinarian;
    const { current_password, new_password } = req.body;

    const veterinarian = await Veterinarian.findById(id);
    if (!veterinarian) {
        return res.status(400).json({ msg: 'Veterinarian not found' });
    }

    const isMatch = await veterinarian.matchPassword(current_password);
    if (!isMatch) {
        return res.status(400).json({ msg: 'Invalid password' });
    }

    veterinarian.password = new_password;
    await veterinarian.save();
    res.json({ msg: 'Password updated' });
}

export {
    register,
    profile,
    confirm,
    authProfile,
    forgot,
    checkToken,
    newPassword,
    updateProfile,
    updatePassword
};
