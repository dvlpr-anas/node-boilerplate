import { NextFunction } from 'express'

interface StatusCodeErr extends Error {
    statusCode: number
}

export const throwError = (
    message: string,
    next: NextFunction,
    statusCode?: number,
) => {
    const err = new Error(message) as StatusCodeErr
    err.statusCode = statusCode || 500
    next(err)
}
