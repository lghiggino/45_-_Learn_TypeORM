import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany } from "typeorm"
import { Account } from "./Account"
import { Client } from "./Client"
import { Person } from "./utils/Person"


@Entity("banker")
export class Banker extends Person {

    @Column({
        unique: true,
        length: 10
    })
    employeeNumber: string

    @ManyToMany(
        () => Client,
        { cascade: true, eager: true }
    )
    @JoinTable(
        {
            name: "bankers_clients",
            joinColumn: {
                name: "banker",
                referencedColumnName: "id"
            },
            inverseJoinColumn: {
                name: "client",
                referencedColumnName: "id"
            }
        }
    )
    clients: Client[]

    @OneToMany(
        () => Account,
        account => account.banker
    )
    accounts: Account[]

}