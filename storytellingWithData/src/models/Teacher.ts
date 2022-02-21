import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
} from 'typeorm';

@Entity()
export default class Teacher {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({
        length: 25,
    })
    first_name: string;

    @Column({
        length: 50,
    })
    last_name: string;

    @Column({
        length: 60,
    })
    school: string;

    @Column()
    salary: number;

    @Column()
    hire_date: Date;

    @Column()
    duration: number;

    @CreateDateColumn({ name: 'created_At' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_At', nullable: true, default: null })
    updatedAt: Date;

    @DeleteDateColumn({ name: 'deleted_At', nullable: true, default: null })
    deletedAt: Date;
}
