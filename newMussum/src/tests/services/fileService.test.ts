import fs from 'fs';
import path from 'path';
import { getRepository } from 'typeorm';
import { MYFile } from '../../models/File.entity';
import FileRepository from '../../repositories/FileRepository';
import FileService from '../../services/fileService';

const file = path.join(__dirname, '../fixtures', 'CNAB.txt');

const fileService = new FileService()


describe('Should save the file in the DB', () => {
    it('should save a file', async() => {
        // const beforeFileCount = (await FileRepository.findAll()).length
        const savedFile = await fileService.save(file);
        console.log("@test ",savedFile)
        
        // const afterFileCount = (await FileRepository.findAll()).length
        // expect(afterFileCount).toBe(beforeFileCount + 1)
    });
})