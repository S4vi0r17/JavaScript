import express from 'express';
import {
    register,
    profile,
    confirm,
    authProfile,
    forgot,
    checkToken,
    newPassword,
    updateProfile,
    updatePassword
} from '../controllers/veterinarianControllers.js';
import checkAuth from '../middlewares/authMiddleware.js';

const router = express.Router();

// Public routes
router.post('/', register);
router.get('/confirm/:token', confirm);
router.post('/login', authProfile);
router.post('/forgot', forgot);
// router.get('/forgot/:token', checkToken);
// router.post('/forgot/:token', newPassword);
router.route('/forgot/:token').get(checkToken).post(newPassword);

// Authenticated routes
router.get('/profile', checkAuth, profile);
router.put('/profile/:id', checkAuth, updateProfile);
router.put('/update-password', checkAuth, updatePassword);

export default router;
