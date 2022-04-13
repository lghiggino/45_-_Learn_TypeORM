import { EntityRepository, Repository } from 'typeorm';
import { Courses } from '../models/Courses.entity';

@EntityRepository(Courses)
export default class CoursesRepository extends Repository<Courses> {
    public async findByName(name: string): Promise<Courses[]> {
        return await this.find({
            where: { name } 
        })
    }
}