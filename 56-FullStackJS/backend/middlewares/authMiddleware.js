import jwt from 'jsonwebtoken';
import Veterinarian from '../models/Veterinarian.js';

const checkAuth = async (req, res, next) => {
    
    let token = req.headers.authorization;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        try {
            token = token.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            // console.log(decoded);
            req.veterinarian = await Veterinarian.findById(decoded._id).select(
                '-password -token -confirmed'
            );

            return next();
        } catch (error) {
            return res.status(403).json({ error: 'Token not valid' });
        }
    }

    if (!token) {
        return res.status(403).json({ error: 'Token not valid or not provided' });
    }

    next();
};

export default checkAuth;
