import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity('Class')
export default class Class {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({
    length: 100,
  })
  discipline: string;

  @Column({
    length: 500,
  })
  description: string;

  @Column()
  duration: number;

  @Column()
  credits: number;

  @CreateDateColumn({ name: 'created_At' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_At', nullable: true, default: null })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_At', nullable: true, default: null })
  deletedAt: Date;
}
