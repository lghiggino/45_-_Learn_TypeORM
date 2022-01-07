import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity("client")
export class Client extends BaseEntity {
    @PrimaryColumn()
    id!: number;
    
    @Column()
    firstName!: string
}