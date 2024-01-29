import { Router } from 'express'

import { isAdmin } from '../../middlewares/is-admin.middleware'
import { validate } from '../../middlewares/validate.middleware'
import { authenticateUser } from '../../utils/jwt/jwt'
import {
    addGrocery,
    deleteGrocery,
    getGroceries,
    updateGrocery,
} from './grocery.controller'
import { validation } from './grocery.validation'

const router: Router = Router()

router.post('/', authenticateUser, isAdmin, validate(validation), addGrocery)

router.get('/', authenticateUser, getGroceries)

router.put('/:id', authenticateUser, isAdmin, updateGrocery)

router.delete('/:id', authenticateUser, isAdmin, deleteGrocery)

export default router
