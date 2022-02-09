import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('Content')
export default class Content {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({
    length: 100,
  })
  description: string;

  @Column({
    length: 100,
  })
  linkContent: string;

  @CreateDateColumn({ name: 'created_At' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_At', nullable: true, default: null })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_At', nullable: true, default: null })
  deletedAt: Date;
}
