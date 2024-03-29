import express from 'express';
import { signin  } from "../controllers/user.controller";
import { loginValidation } from '../validations/login/login.validation';

const router = express.Router();

router.post('/signin', loginValidation, signin)

export default router