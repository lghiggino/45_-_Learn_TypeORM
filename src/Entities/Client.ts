import {
    Entity,
    Column,
    OneToMany,
    ManyToMany
} from "typeorm";

import { Person } from "./Utils/Person";
import { Banker } from "./Banker";
import { Transaction } from "./Transaction";

@Entity("client")
export class Client extends Person {
    @Column({ type: "numeric" })
    balance: number

    @Column({ default: true })
    isActive: boolean

    @Column({
        type: "simple-json",
        nullable: true
    })
    additionalInfo: {
        age: number
        familyMembersCount: number
    }

    @Column({
        type: "simple-array",
        default: []
    })
    familyMembers: string[]

    @OneToMany(
        () => Transaction,
        transaction => transaction.client
    )
    transactions: Transaction[]
    
    @ManyToMany(() => Banker)
    bankers: Banker[]
}
