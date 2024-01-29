import {
    BaseEntity,
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm'

import { Order } from './order.model'

@Entity('users')
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({ unique: true })
    userName!: string

    @Column({ select: false })
    password!: string

    @Column({ default: 'User' })
    role!: string

    @OneToMany((_type) => Order, (order) => order) orders!: Order[]

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
