import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('groceries')
export class Grocery extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    name!: string

    @Column({ default: 'kg' })
    unit!: string

    @Column({ default: 1 })
    value!: number

    @Column({ type: 'double' })
    price!: number

    @Column({ default: 0 })
    stock!: number

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
