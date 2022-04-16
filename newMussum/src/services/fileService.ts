import Cnab from '../models/Cnab.entity';
import { MYFile } from '../models/File.entity';
import FileRepository from '../repositories/FileRepository';

const fileRepository = new FileRepository();


export default class FileService {
    public async save(file: any){
        const savedFile = await fileRepository.createOne(file);
        console.log("fileService", savedFile)
        // return savedFile;
    }
}
//: Promise<MYFile> 
