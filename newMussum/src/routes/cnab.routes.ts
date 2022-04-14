import { Request, Router } from 'express';
import { getCustomRepository, getRepository } from 'typeorm';
import Cnab from '../models/Cnab.entity';



const cnabRouter = Router()

cnabRouter.get('/', async (req, res) => {
    try {
        const cnabRepo = getRepository(Cnab);
        const findAll = await cnabRepo.find();
        return res.json(findAll);
    } catch (error) {
        console.error(error);
        return res.json(`${error}`)
    }
})

// cnabRouter.get('/:name', async (req, res) => {
//     const courseName = req.params.name;
//     try {
//         const cnabRepo = getCustomRepository(cnabRepository);
//         const find = await cnabRepo.findByName(courseName);
//         return res.json(find);
//     } catch (error) {
//         console.error(error);
//         return res.json(`${error}`)
//     }
// })

cnabRouter.post('/', async (req, res) => {
    try {
        const cnabRepo = getRepository(Cnab);
        const savedCourse = await cnabRepo.save(req.body);
        console.log(savedCourse)
        return res.status(200).json(savedCourse)
    } catch (error) {
        console.error(error)
        return res.json(`${error}`)
    }
})

export default cnabRouter;