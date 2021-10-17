import { BaseEntity, Entity, UpdateDateColumn, CreateDateColumn, Column, PrimaryGeneratedColumn } from "typeorm";

export enum TransactionTypes{
    DEPOSIT = 'deposit',
    WITHDRAW = 'withdraw'
}

@Entity("transactions")
export class Transactions extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: string

    @Column({ type: "numeric" })
    amount: number

    @Column({type: 'enum', enum: TransactionTypes})
    type: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}