import {
    Entity,
    Column
} from "typeorm";

import { Person } from "./Utils/Person";

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

   
}
