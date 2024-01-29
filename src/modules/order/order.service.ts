import AppDataSource from '../../config/typeorm'
import { Order } from '../../models/order.model'
import { OrderDetails } from '../../models/order-detail.model'
import { User } from '../../models/user.model'

const orderRepo = AppDataSource.getRepository(Order)
const orderDetailRepo = AppDataSource.getRepository(OrderDetails)

export const addOrderService = async (user: User): Promise<Order> => {
    return await orderRepo.save({ user })
}

export const addOrderDetailService = async (
    orderDetal: OrderDetails,
): Promise<OrderDetails> => {
    return await orderDetailRepo.save(orderDetal)
}

export const getAllOrdersService = async (userId: number): Promise<any> => {
    return await orderRepo.find({
        relations: {
            orderDetail: true,
        },
        where: {
            user: { id: userId }
        }
    })
}       