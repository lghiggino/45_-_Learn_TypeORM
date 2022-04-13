import {
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryGeneratedColumn,
    DeleteDateColumn,
} from 'typeorm';

@Entity('cnab')
export default class Cnab {
    @PrimaryGeneratedColumn('increment')
    id?: string;

    @Column()
    transactionTypeCode: string;

    @Column()
    date: string;

    @Column()
    value: number;

    @Column({
        length: 11,
        unique: true,
    })
    cpf: string;

    @Column({
        length: 16,
    })
    cardNumber: string;

    @Column()
    hour: string;

    @Column({
        unique: true,
    })
    storeOwnerName: string;

    @Column({
        unique: true,
    })
    storeName: string;

    @CreateDateColumn({ name: 'created_At', nullable: true })
    createdAt?: Date;

    @UpdateDateColumn({ name: 'update_At', nullable: true, default: null })
    updatedAt?: Date;

    @DeleteDateColumn({ name: 'deleted_At', nullable: true, default: null })
    deletedAt?: Date;
}
