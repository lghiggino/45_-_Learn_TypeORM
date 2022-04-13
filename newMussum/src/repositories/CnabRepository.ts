import { EntityRepository, Repository } from 'typeorm';
import Cnab from '../models/Cnab.entity';

@EntityRepository(Cnab)
export default class CnabRepository extends Repository<Cnab> {
    public async findByName(name: string): Promise<Cnab[]> {
        return this.find({
            where: {
                name,
            },
        });
    }

    public async createOne(cnabCreationParams: Cnab): Promise<Cnab> {
        return this.save({ ...cnabCreationParams });
    }
}
