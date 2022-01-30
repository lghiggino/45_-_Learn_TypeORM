import { Router } from 'express';
import { getRepository } from 'typeorm';
import Class from '../models/Class';

const classRouter = Router();

classRouter.post('/', async (req, res) => {
  try {
    const repo = getRepository(Class);
    const savedClass = await repo.save(req.body);
    return res.status(201).json(savedClass);
  } catch (error) {
    if (error instanceof Error) {
      console.error('error >>', error?.message);
    } else {
      console.log('error >>', error);
    }
  }
});

classRouter.get('/byId/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const repo = getRepository(Class);
    const classById = await repo.findOneOrFail(id);
    return res.status(200).json(classById);
  } catch (error) {
    if (error instanceof Error) {
      console.error('error >>', error?.message);
    } else {
      console.log('error >>', error);
    }
  }
});

classRouter.get('/listAll', async (req, res) => {
  try {
    const repo = getRepository(Class);
    const list = await repo.find();
    return res.status(200).json(list);
  } catch (error) {
    if (error instanceof Error) {
      console.error('error >>', error?.message);
    } else {
      console.log('error >>', error);
    }
  }
});

export default classRouter;
