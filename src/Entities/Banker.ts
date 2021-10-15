import {
    Entity,
    BaseEntity,
    Column,
    PrimaryColumn,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn
} from "typeorm";

@Entity("banker")
export class Banker extends BaseEntity {
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

    @Column({unique:true, length: 10})
    employeeNumber: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updateAt: Date

    @DeleteDateColumn()
    deletedAt: Date
}
