import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Student {
  @PrimaryGeneratedColumn('increment')
  id: number;
}
