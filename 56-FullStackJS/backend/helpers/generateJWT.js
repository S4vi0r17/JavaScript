import jwt from 'jsonwebtoken';

const generateJWT = (_id) => {
    return jwt.sign({ _id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });
};

export default generateJWT;
