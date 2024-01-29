import express from 'express'
import { ContextRunner, validationResult } from 'express-validator'

export const validate = (validations: ContextRunner[]) => {
    return async (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction,
    ) => {
        for (const validation of validations) {
            await validation.run(req)
        }

        const errors = validationResult(req)
        if (errors.isEmpty()) return next()

        res.status(400).json({ errors: errors.array() })
    }
}
