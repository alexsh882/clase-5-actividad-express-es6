import { body } from 'express-validator';

export const signInSchema = [
    body('username')
    .notEmpty()
    .withMessage('El nombre de usuario es requerido'),
    body('password')
    .notEmpty()
    .withMessage('La contraseña es requerida'),    
];