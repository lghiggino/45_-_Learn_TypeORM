import { Router } from 'express';
import { getRepository } from 'typeorm';
import Teacher from '../models/Teacher';

const teacherRouter = Router();

teacherRouter.post('/', async (req, res) => {
  try {
    const repo = getRepository(Teacher);
    const savedTeacher = await repo.save(req.body);
    return res.status(201).json(savedTeacher);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error?.message)
    }else{
      console.log(error)
    }
  }
});

teacherRouter.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const repo = getRepository(Teacher);
    const classById = await repo.findOneOrFail(id);
    return res.status(200).json(classById);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error?.message)
    }else{
      console.log(error)
    }
  }
});

export default teacherRouter;