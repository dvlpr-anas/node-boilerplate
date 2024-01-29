import { Response } from 'express'

export const sendReponse = (
    res: Response,
    message: string,
    data?: unknown,
    statusCode?: number,
) => {
    return res
        .status(statusCode || 200)
        .json({ acknowledgement: true, message, data })
}
