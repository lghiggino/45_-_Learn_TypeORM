import {
    Entity,
    Column,
    ManyToMany,
    JoinColumn,
    JoinTable
} from "typeorm";
import { Client } from "./Client";

import { Person } from "./Utils/Person";

@Entity("banker")
export class Banker extends Person {
    @Column({unique:true, length: 10})
    employeeNumber: string

    @Column()
    institutionName: string

    @ManyToMany(
        () => Client
    )
    @JoinTable({
        name: 'bankers_clients',
        joinColumn: {
            name: 'banker',
            referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'client',
            referencedColumnName: 'id'
        }
    })
    clients: Client[]

    
}
