import {
    Entity,
    BaseEntity,
    Column,
    PrimaryColumn,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn
} from "typeorm";

@Entity("client")
export class Client extends BaseEntity {
    @PrimaryColumn({ type: "uuid" })
    id: string

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
    additionalInfo: {
        age: number
        familyMembersCount: number
    }

    @Column({
        type: "simple-array",
        default: []
    })
    familyMembers: string[]

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updateAt: Date

    @DeleteDateColumn()
    deletedAt: Date
}
