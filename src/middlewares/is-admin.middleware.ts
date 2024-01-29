import { NextFunction, Request, Response } from 'express'

import { User } from '../models/user.model'
import { getAuthenticatedUser } from '../utils/get-authenticated-user'
import { throwError } from '../utils/throw-error'

export const isAdmin = async (
    req: Request,
    _res: Response,
    next: NextFunction,
) => {
    try {
        const user = getAuthenticatedUser(req) as User
        if (!user || user.role !== 'Admin')
            return throwError('Access Denied', next, 403)

        next()
    } catch (err) {
        return throwError('Access Denied', next, 403)
    }
}
