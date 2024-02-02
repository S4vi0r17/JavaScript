import express from 'express';
import { register, profile, confirm, authProfile } from '../controllers/veterinarianControllers.js';

const router = express.Router();

router.post('/', register);

router.get('/profile', profile);

router.get('/confirm/:token', confirm);

router.post('/login', authProfile);

export default router;