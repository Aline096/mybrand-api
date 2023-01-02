import express from 'express';
const router = express.Router();
import {authGuard} from '../middlewares/authGuard';
import { createMessage, getMessages, getMessage, deleteMessage } from "../controllers/message.controller";
import { messageValidation} from "../validations/message/message.validation";


router.get('/', authGuard, getMessages);
router.get('/:id', authGuard, getMessage)
router.post('/',messageValidation , createMessage);
router.delete('/:id', authGuard, deleteMessage);

module.exports = router;