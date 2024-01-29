import { NextFunction, Request, Response } from 'express'

interface Err {
    message: string
    statusCode: number
}

export const globalErrorHandler = (
    err: Err,
    req: Request,
    res: Response,
    _next: NextFunction,
) => {
    res.status(err.statusCode).json({
        acknowledgement: false,
        httpStatus: err.statusCode,
        message: err.message,
    })
}
