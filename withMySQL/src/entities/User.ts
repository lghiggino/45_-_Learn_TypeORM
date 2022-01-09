import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("user")
export class User {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "text" })
    email!: string;

    @Column({ type: "text" })
    name!: string

    @Column("simple-array")
    phoneNumbers!: string[]
}