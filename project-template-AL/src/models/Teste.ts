import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
  } from 'typeorm';
  
  @Entity()
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
  
    @UpdateDateColumn({ name: 'updated_At' })
    updatedAt: Date;
  
    @DeleteDateColumn({ name: 'deleted_At' })
    deletedAt: Date;
  }
  