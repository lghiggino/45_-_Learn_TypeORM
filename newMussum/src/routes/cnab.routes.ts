import { Request, Router } from 'express';
import { createReadStream } from 'fs';
import fileUpload from 'express-fileupload';
import { getConnection, getCustomRepository, getRepository } from 'typeorm';
import Cnab from '../models/Cnab.entity';
import { MYFile } from '../models/File.entity';
const fs = require('fs');


const cnabRouter = Router()

cnabRouter.get('/', async (req, res) => {
    try {
        console.log("entrou aqui")
        const cnabRepo = getRepository(Cnab);
        const findAll = await cnabRepo.find();
        return res.json(findAll);
    } catch (error) {
        console.error(error);
        return res.json(`${error}`)
    }
})

cnabRouter.get("/upload", (req, res) => {
    res.send(`
    <form action="http://localhost:3000/cnab/upload" method="post" enctype="multipart/form-data">
        <label>Choose a file to upload:
            <input name="datein" type="file" multiple> 
        </label>  
        <button>upload</button>
    </form>
  `)
})

cnabRouter.post('/upload', async (req, res) => {
    let fileData = req.files?.datein

    console.log("fileData >>>>", fileData);


    if (Array.isArray(fileData)) {
        console.log("TODO: Array")
    } else {
        const newFile = new MYFile()
        newFile.name = fileData?.name as string
        newFile.data = fileData?.data.toString('base64') as any
        newFile.data = fileData?.data as Buffer
        newFile.mimeType = fileData?.mimetype as string

        try {
            const repo = getConnection().getRepository(MYFile)
            const result_File = await repo.save(newFile)
            res.send("Upload complete")
        } catch (error) {
            console.log(error)
            res.send("ERROR")
        }

        // try {
        //     const cnabRepo = getRepository(Cnab);
        //     const savedCourse = await cnabRepo.save(req.body);
        //     console.log(savedCourse)
        //     return res.status(200).json(savedCourse)
        // } catch (error) {
        //     console.error(error)
        //     return res.json(`${error}`)
        // }
    }
});

export default cnabRouter;