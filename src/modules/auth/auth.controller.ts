import { NextFunction, Request, Response } from 'express'

import { User } from '../../models/user.model'
import { bcryptLib } from '../../utils/bcrypt'
import {
    getAccessToken,
    getRefreshToken,
    verifyRefresh,
} from '../../utils/jwt/jwt'
import { sendReponse } from '../../utils/send-response'
import { throwError } from '../../utils/throw-error'
import {
    getIdByUserNameService,
    getUserByUserNameService,
    signUpService,
} from './auth.service'

export const signupUser = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const alreadUser = await getIdByUserNameService(req.body.userName)
        if (alreadUser?.id)
            return throwError('Username already exist', next, 400)

        req.body.password = await bcryptLib.cryptPassword(req.body.password)

        const user = await signUpService(req.body)
        const { password: _, ...responseObj } = user
        return sendReponse(res, 'User Created', responseObj, 201)
    } catch (error) {
        console.log(error)
        return throwError('Something went wrong', next)
    }
}

interface ResponseObject extends User {
    accessToken?: string
    refreshToken?: string
}

export const signinUser = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const user = await getUserByUserNameService(req.body.userName)
        if (!user) return throwError('Username or password is wrong', next, 400)

        const isMatch = await bcryptLib.comparePassword(
            req.body.password,
            user.password,
        )

        if (!isMatch)
            return throwError('Username or password is wrong', next, 400)

        const extendedUser: ResponseObject = user

        const { password: _, ...responseObj } = extendedUser

        const accessToken = getAccessToken(responseObj)
        const refreshToken = getRefreshToken(responseObj)

        responseObj.accessToken = accessToken
        responseObj.refreshToken = refreshToken

        return sendReponse(res, 'Sign In Successful', responseObj)
    } catch (error) {
        console.log(error)
        return throwError('Something went wrong', next)
    }
}

export const refresh = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        if (!req.body.refreshToken) throwError('Bad Rquest', next, 400)

        const newTokens = verifyRefresh(req.body.refreshToken)

        return sendReponse(res, 'New Tokens', newTokens)
    } catch (error) {
        console.log(error)
        return throwError('Something went wrong', next)
    }
}
