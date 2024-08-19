import { Router } from 'express';
import { authService } from '../services/auth.service.js';
import AuthController from '../controllers/auth.controller.js';

import { validate } from '../middleware/validations.js';
import { signInSchema, signUpSchema } from '../validations/user.schema.js';

const router = Router();


const controller = new AuthController(authService);

router.post('/auth/sign-in',[validate(signInSchema)], (req, res) => {
  return controller.login(req, res);
});

router.post('/auth/sign-up', [validate(signUpSchema)], (req, res) => {
  return controller.register(req, res);
});


export default router;

