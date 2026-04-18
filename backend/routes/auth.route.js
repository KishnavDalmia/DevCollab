import express from 'express';
import User from '../models/user.model.js';
import { isAuthenticated, isNotAuthenticated } from '../middleware/authMiddleware.js';
import { logout, login, register, me } from '../controllers/authController.js';

const router = express.Router();

router.post('/register', isNotAuthenticated, register);
router.post('/login',isNotAuthenticated, login);
router.post('/logout',isAuthenticated, logout);
router.get('/me',isAuthenticated, me);

export default router;