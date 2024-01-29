import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

import { commanConfig } from '../../config/env-config/get-comman'
import { throwError } from '../throw-error'
import { CustomRequest } from './Request.interface'
import { TokenUser } from './TokenUser.interface'

export const authenticateUser = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '')

        if (!token) return throwError('Access Denied', next, 403)

        const decoded = jwt.verify(token, commanConfig().accessToken)
        ;(req as CustomRequest).user = decoded

        next()
    } catch (err) {
        return throwError('Access Denied', next, 403)
    }
}

export const getAccessToken = (user: TokenUser) => {
    return jwt.sign(user, commanConfig().accessToken, {
        expiresIn: '10m',
    })
}

export const getRefreshToken = (user: TokenUser) => {
    return jwt.sign(user, commanConfig().refreshToken, {
        expiresIn: '1d',
    })
}

export const verifyRefresh = (refreshToken: string) => {
    const decoded = jwt.verify(
        refreshToken,
        commanConfig().refreshToken,
    ) as TokenUser

    delete decoded.iat
    delete decoded.exp

    return {
        newAccessToken: getAccessToken(decoded),
        newRefreshToken: getRefreshToken(decoded),
    }
}
