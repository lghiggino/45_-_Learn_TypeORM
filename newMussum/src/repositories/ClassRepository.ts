import { EntityRepository, getRepository, Repository } from 'typeorm';
import Class from '../models/Class.entity';

@EntityRepository(Class)
export default class ClassRepository extends Repository<Class> {
  public async findByNameKeyword(name: string): Promise<Class[]> {
    const listByName = await getRepository(Class)
      .createQueryBuilder('class')
      .where('class.name like :name', { name: `%${name}%` })
      .getMany();
    return listByName;
  }
}
