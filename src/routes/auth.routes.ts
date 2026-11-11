import { Router } from 'express';
import * as authCtrl from '../controllers/auth.controller';
import { loginSchema } from '../validators/auth.va;idator';
import { validate } from '../middlewares/validate.middleware';

const router = Router()

router.post('/login',validate(loginSchema), authCtrl.login);

export default router