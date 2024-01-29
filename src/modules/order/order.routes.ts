import { Router } from 'express'

import { authenticateUser } from '../../utils/jwt/jwt'
import { addOrder, getAllOrders } from './order.controller'

const router: Router = Router()

router.post('/', authenticateUser, addOrder)

router.get('/', authenticateUser, getAllOrders)

export default router
