import { EntityRepository, getRepository, Repository } from 'typeorm';
import { MYFile } from '../models/File.entity';

@EntityRepository(MYFile)
export default class FileRepository extends Repository<MYFile> {

    public async findByNameKeyword(name: string): Promise<MYFile[]> {
        const listByName = await getRepository(MYFile)
            .createQueryBuilder('myfile')
            .where('myfile.name like :name', { name: `%${name}%` })
            .getMany();
        return listByName;
    }

    public async createOne(file: any): Promise<MYFile> {
        const newFile = new MYFile()
        newFile.name = file?.name as string
        newFile.data = file?.data.toString('base64') as any
        newFile.data = file?.data as Buffer
        newFile.mimeType = file?.mimetype as string

        const saveOne = getRepository(MYFile)
            .createQueryBuilder('myfile')
            .insert()
            
        return saveOne;
    }

    // public async createOne(file: any) {
    //     console.log(file)
    //     return this.save(file)
    // }
}

//: Promise<MYFile>