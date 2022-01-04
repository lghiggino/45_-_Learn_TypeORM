import { BaseEntity, Column, CreateDateColumn, Entity, EntityRepository, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Client } from "./Client";

export enum TransactionTypes {
    DEPOSIT = "deposit",
    WITHDRAW = "withdraw"
}

export enum TransactionStatus {
    PENDING = "pending",
    REJECTED = "rejected",
    APPROVED = "approved",
    SCHEDULED = "scheduled"
}

@Entity("transactions")
export class Transaction extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "enum",
        enum: TransactionTypes
    })
    type: string;

    @Column({
        type: "numeric"
    })
    amount: number;

    // @Column({
    //     type: "enum",
    //     enum: TransactionStatus
    // })
    // status: string;

    @ManyToOne(
        () => Client,
        client => client.transactions
    )
    @JoinColumn({
        name: 'clientId'
    })
    client: Client

    @CreateDateColumn()
    createdAt: Date;
}