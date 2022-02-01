import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity()
export default class Banana {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({
    length: 100,
  })
  bananaName: string;

  @Column()
  bananSpecies: string;

  @CreateDateColumn({ name: 'created_At' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_At' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_At' })
  deletedAt: Date;
}
