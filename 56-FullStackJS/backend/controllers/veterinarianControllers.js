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

export {
    register,
    profile
};