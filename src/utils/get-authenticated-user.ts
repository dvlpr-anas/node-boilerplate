import { Request } from 'express'

import { CustomRequest } from './jwt/Request.interface'

export const getAuthenticatedUser = (req: Request) =>
    (req as CustomRequest).user
