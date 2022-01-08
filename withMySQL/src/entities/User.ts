import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("user")
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({type: "text"})
    email: string | undefined;

    @Column({type: "text"})
    name: string | undefined;

    @Column({type: "text"})
    status?: string | undefined;

    @Column("simple-array")
    phoneNumbers: string[] | undefined;
}