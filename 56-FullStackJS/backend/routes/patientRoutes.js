import express from 'express';
import {
    addPatient,
    getPatients,
    getPatient,
    updatePatient,
    deletePatient,
} from '../controllers/patientcontrollers.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router
    .route('/')
    .post(authMiddleware, addPatient)
    .get(authMiddleware, getPatients);
router
    .route('/:id')
    .get(authMiddleware, getPatient)
    .put(authMiddleware, updatePatient)
    .delete(authMiddleware, deletePatient);

export default router;
