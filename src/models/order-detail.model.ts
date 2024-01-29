import {
    BaseEntity,
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm'

import { Grocery } from './grocery.model'
import { Order } from './order.model'

@Entity('order-details')
export class OrderDetails extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @ManyToOne((_type) => Order, (order) => order.orderDetail)
    order!: Order

    @ManyToOne((_type) => Grocery, (grocery) => grocery.id)
    @JoinColumn()
    grocery!: Grocery

    @Column()
    name!: string

    @Column({ default: 'kg' })
    unit!: string

    @Column({ default: 1 })
    value!: number

    @Column({ type: 'double' })
    price!: number

    @Column({ default: 1 })
    quantity!: number

    @Column({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
        select: false,
    })
    createdAt!: string

    @Column({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
        select: false,
    })
    updatedAt!: string
}
