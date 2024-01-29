import { body } from 'express-validator'

export const validation = [
    body('name', 'Name is required').notEmpty().isString().trim(),
    body('price', 'Price is required').notEmpty().isNumeric(),
    body('stock', 'Stock is required').isNumeric(),
]
