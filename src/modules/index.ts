import { Router } from 'express'

import auth from './auth/auth.routes'
import grocery from './grocery/grocery.routes'
import order from './order/order.routes'

const router: Router = Router()

router.use('/auth', auth)
router.use('/grocery', grocery)
router.use('/order', order)

export default router
