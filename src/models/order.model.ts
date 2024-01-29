import {
    BaseEntity,
    Column,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm'

import { OrderDetails } from './order-detail.model'
import { User } from './user.model'

@Entity('orders')
export class Order extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @ManyToOne((_type) => User, (user) => user) user!: User

    @OneToMany((_type) => OrderDetails, (orderDetals) => orderDetals)
    orderDetail!: OrderDetails[]

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
