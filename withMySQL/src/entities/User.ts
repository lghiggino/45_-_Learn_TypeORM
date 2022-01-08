import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("user")
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    // @Column()
    // email: string | undefined;

    // @Column()
    // name: string | undefined;

    // @Column()
    // status?: string | undefined;

    // @Column()
    // phoneNumbers: string[] | undefined;
}