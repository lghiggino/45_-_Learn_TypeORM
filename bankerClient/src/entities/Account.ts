import { BaseEntity, Column, CreateDateColumn, Entity, EntityRepository, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Client } from "./Client";
import { Banker } from "./Banker";

@Entity("account")
export class Account extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    bankId: number

    @Column()
    clientId: number

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