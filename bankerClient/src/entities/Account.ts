import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Client } from "./Client";
import { Banker } from "./Banker";

@Entity("account")
export class Account {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    accountNumber: number

    @Column()
    accountDigit: number

    @CreateDateColumn()
    createdAt: Date;

    @ManyToOne(
        () => Banker,
        banker => banker.accounts
    )
    @JoinColumn({
        name: 'bankerId'
    })
    banker: Banker

    @ManyToOne(
        () => Client
    )
    // @JoinColumn({
    //     name: 'clientId'
    // })
    client: Client

}