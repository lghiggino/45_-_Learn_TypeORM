import { Entity, BaseEntity, Column } from "typeorm";

@Entity("client")
export class Client extends BaseEntity {
    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column({ unique: true })
    email: string

    @Column({ unique: true, length: 16 })
    cardNumber: string

    @Column({ type: "numeric" })
    balance: number

    @Column({ default: true })
    isActive: boolean

    @Column({
        type: "simple-json",
        nullable: true
    })
    additionalInfo:{
        age: number
        familyMembersCount: number
    }

    @Column({
        type: "simple-array",
        default: []
    })
    familyMembers: string[]
}
