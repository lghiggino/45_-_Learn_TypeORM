import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export default class Lesson {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({
    length: 100,
  })
  description: string;

  @CreateDateColumn({ name: 'created_At' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_At', nullable: true, default: null })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_At', nullable: true, default: null })
  deletedAt: Date;
}
