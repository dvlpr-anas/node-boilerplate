import { Router } from 'express'

import { authenticateUser } from '../../utils/jwt/jwt'
import { addOrder } from './order.controller'

const router: Router = Router()

router.post('/', authenticateUser, addOrder)

export default router
