import express from 'express';
import { addBookmark, removeBookmark } from '../controllers/bookmarkController.js';
import { authMiddleware } from '../utils/authMiddleware.js';

const router = express.Router();

router.post('/add', authMiddleware, addBookmark);
router.post('/remove', authMiddleware, removeBookmark);

export default router;
