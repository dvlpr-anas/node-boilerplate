import { NextFunction, Request, Response } from 'express'

import { sendReponse } from '../../utils/send-response'
import { throwError } from '../../utils/throw-error'
import {
    addGroceryService,
    deleteGroceryService,
    getGroceriesService,
    updateGroceryService,
} from './grocery.service'

export const addGrocery = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const grocery = await addGroceryService(req.body)
        return sendReponse(res, 'Grocery Created', grocery, 201)
    } catch (error) {
        return throwError('Something went wrong', next)
    }
}

export const getGroceries = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const grocery = await getGroceriesService()
        return sendReponse(res, 'All Groceries', grocery, 200)
    } catch (error) {
        return throwError('Something went wrong', next)
    }
}

export const updateGrocery = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const id = req.params.id
        if (!id) return throwError('Invalid Request', next, 403)

        const grocery = await updateGroceryService(parseInt(id), req.body)
        return sendReponse(res, 'Grocery Updated', grocery, 201)
    } catch (error) {
        return throwError('Something went wrong', next)
    }
}

export const deleteGrocery = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const id = req.params.id
        if (!id) return throwError('Invalid Request', next, 403)

        const grocery = await deleteGroceryService(parseInt(id))
        return sendReponse(res, 'Grocery Deleted', grocery, 200)
    } catch (error) {
        return throwError('Something went wrong', next)
    }
}
