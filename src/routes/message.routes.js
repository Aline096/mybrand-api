import express from 'express';
const router = express.Router();
import auth from '../middlewares/authMiddleware';
import { createMessage, getMessages, getMessage, deleteMessage } from "../controllers/message.controller";


router.get('/',auth, getMessages);
router.get('/:id',auth, getMessage)
router.post('/', createMessage);
router.delete('/:id',auth, deleteMessage);

module.exports = router;