import express from 'express';
import { register, profile, confirm, authProfile } from '../controllers/veterinarianControllers.js';
import checkAuth from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', register);
router.get('/confirm/:token', confirm);
router.post('/login', authProfile);

router.get('/profile', checkAuth, profile);

export default router;