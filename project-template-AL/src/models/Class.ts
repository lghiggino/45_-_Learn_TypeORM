import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity()
export default class Class {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({
    length: 100,
  })
  name: string;

  @Column()
  duration: number;

  @CreateDateColumn('created_At')
  createdAt: Date;

  // @UpdateDateColumn('update_At')
  // updatedAt: Date;

  // @DeleteDateColumn('deleted_At')
  // deletedAt: Date;
}
