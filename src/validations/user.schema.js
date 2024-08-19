import { body } from 'express-validator';

export const signInSchema = [
    body('username')
    .notEmpty()
    .withMessage('El nombre de usuario es requerido'),
    body('password')
    .notEmpty()
    .withMessage('La contraseña es requerida'),    
];

export const signUpSchema = [
    body('names')
    .notEmpty()
    .withMessage('El nombre es requerido'),
    body('username')
    .notEmpty()
    .withMessage('El nombre de usuario es requerido'),
    body('password')
    .notEmpty()
    .withMessage('La contraseña es requerida')
    .isStrongPassword({
        minLength: 8,
        minNumbers: 1,
        minSymbols: 1,
        returnScore: true,        
    })
    .withMessage('La contraseña debe tener al menos 8 caracteres, una letra mayúscula, un número y un caracter especial')
];