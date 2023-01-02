import express from 'express';
const router = express.Router();
import {authGuard} from '../middlewares/authGuard';
import { createMessage, getMessages, getMessage, deleteMessage } from "../controllers/message.controller";


router.get('/', authGuard, getMessages);
router.get('/:id', authGuard, getMessage)
router.post('/', createMessage);
router.delete('/:id', authGuard, deleteMessage);

module.exports = router;