import { Column, Entity, JoinTable, ManyToMany, OneToMany, OneToOne, } from "typeorm"
import { Account } from "./Account";
import { Banker } from "./Banker";
import { Transaction } from "./Transaction";
import { Person } from "./utils/Person";


@Entity("client")
export class Client extends Person {

    @Column({
        type: "numeric"
    })
    balance: number;

    @Column({
        default: true,
        name: "active"
    })
    isActive: boolean;

    @Column({
        type: "simple-json",
        nullable: true
    })
    additionalInfo: {
        age: number,
        hairColor: string
    }

    @Column({
        type: "simple-array",
        nullable: true
    })
    familyMembers: string[]

    @OneToMany(
        () => Transaction,
        transaction => transaction.client
    )
    transactions: Transaction[]

    @ManyToMany(
        () => Banker
    )
    bankers: Banker[]

    @OneToMany(
        () => Account,
        account => account.client
    )
    accounts: Account[]

}