import {
    BaseEntity,
    Entity,
    UpdateDateColumn,
    CreateDateColumn,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn
} from "typeorm";

import { Client } from "./Client";

export enum TransactionTypes {
    DEPOSIT = 'deposit',
    WITHDRAW = 'withdraw'
}

@Entity("transactions")
export class Transaction extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: string

    @Column({ type: "numeric" })
    amount: number

    @Column({ type: 'enum', enum: TransactionTypes })
    type: string

    @ManyToOne(
        () => Client,
        client => client.transactions, 
        {
            onDelete: "SET NULL"
        }
    )

    @JoinColumn({
        name: 'clientId'
    })
    client: Client

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}