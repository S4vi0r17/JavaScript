const register = (req, res) => {
    res.send('Veterinarians');
};

const profile = (req, res) => {
    res.send('Veterinarian profile');
}

export {
    register,
    profile
};