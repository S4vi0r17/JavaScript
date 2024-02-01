import express from 'express';
import { register, profile } from '../controllers/veterinarianControllers.js';

const router = express.Router();

router.get('/', register);

router.get('/profile', profile);

export default router;