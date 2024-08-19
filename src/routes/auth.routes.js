import { Router } from 'express';
import { authService } from '../services/auth.service.js';
import AuthController from '../controllers/auth.controller.js';

import { validate } from '../middleware/validations.js';
import { signInSchema } from '../validations/user.schema.js';

const router = Router();


const controller = new AuthController(authService);

router.post('/auth/login',[validate(signInSchema)], (req, res) => {
  controller.login(req, res);
});


export default router;

