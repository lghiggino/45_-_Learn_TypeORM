import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity('Teste')
export default class Teste {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({
    length: 100,
  })
  testName: string;

  @Column()
  testDuration: number;

  @CreateDateColumn({ name: 'created_At' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_At', nullable: true, default: null })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_At', nullable: true, default: null })
  deletedAt: Date;
}
