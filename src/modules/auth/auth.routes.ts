import { Router } from 'express'

import { validate } from '../../middlewares/validate.middleware'
import { refresh, signinUser, signupUser } from './auth.controller'
import { validation } from './auth.validation'

const router: Router = Router()

router.post('/sign-up', validate(validation), signupUser)

router.post('/sign-in', validate(validation), signinUser)

router.post('/get-refresh-token', refresh)

export default router
