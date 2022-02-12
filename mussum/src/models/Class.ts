import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity('class')
export default class Class {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    length: 60,
    unique: true,
  })
  name: string;

  @Column()
  duration: number;

  @Column({
    length: 200,
    nullable: true,
    default: null,
  })
  description: string;

  @CreateDateColumn({ name: 'created_At' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'update_At', nullable: true, default: null })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'update_At', nullable: true, default: null })
  deletedAt: Date;
}
