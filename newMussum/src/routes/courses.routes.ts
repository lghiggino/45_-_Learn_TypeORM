import { Router } from 'express';
import { getCustomRepository, getRepository } from 'typeorm';
import { Courses } from '../models/Courses.entity';
import CoursesRepository from '../repositories/CoursesRepository';

const coursesRouter = Router()

coursesRouter.get('/', async (req, res) => {
    console.log("Entrou aqui")
    console.log(req.body)
    try {
        const coursesRepo = getRepository(Courses);
        const findAll = await coursesRepo.find();
        return res.json(findAll);
    } catch (error) {
        console.error(error);
        return res.json(`${error.message}`)
    }
})

coursesRouter.get('/:name', async (req, res) => {
    const courseName = req.params.name;
    try {
        const coursesRepo = getCustomRepository(CoursesRepository);
        const find = await coursesRepo.findByName(courseName);
        return res.json(find);
    } catch (error) {
        console.error(error);
        return res.json(`${error.message}`)
    }
})

coursesRouter.post('/', async (req, res) => {
    try {
        const coursesRepo = getRepository(Courses);
        const savedCourse = await coursesRepo.save(req.body);
        console.log(savedCourse)
        return res.status(200).json(savedCourse)
    } catch (error) {
        console.error(error)
        return res.json(`${error.message}`)
    }
})

export default coursesRouter;