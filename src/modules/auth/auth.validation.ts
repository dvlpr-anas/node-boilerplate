import { body } from 'express-validator'

export const validation = [
    body('userName', 'UserName is required').notEmpty().isString().trim(),
    body('password', 'Password is required').notEmpty().isString().trim(),
]
