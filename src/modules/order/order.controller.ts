import { NextFunction, Request, Response } from 'express'

import { User } from '../../models/user.model'
import { getAuthenticatedUser } from '../../utils/get-authenticated-user'
import { sendReponse } from '../../utils/send-response'
import { throwError } from '../../utils/throw-error'
import { addOrderDetailService, addOrderService } from './order.service'

interface Detail {
    id: number
    name: string
    unit: string
    value: number
    price: number
    quantity: number
}

export const addOrder = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const user = getAuthenticatedUser(req) as User
        if (!user) return throwError('No User Found', next, 404)

        const order = await addOrderService(user)

        const details = req.body.map((detail: Detail) => {
            return {
                name: detail.name,
                unit: detail.unit,
                value: detail.value,
                price: detail.price,
                quantity: detail.quantity,
                grocery: {
                    id: detail.id,
                    name: detail.name,
                    unit: detail.unit,
                    value: detail.value,
                    price: detail.price,
                },
                order: order,
            }
        })

        await addOrderDetailService(details)
        return sendReponse(res, 'Order Placed', 201)
    } catch (error) {
        console.log(error)
        return throwError('Something went wrong', next)
    }
}
