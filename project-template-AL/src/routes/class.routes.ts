import { Router } from 'express';
import { getRepository } from 'typeorm';
import Class from '../models/Class';

const classRouter = Router();

classRouter.post('/', async (req, res) => {
  const repo = getRepository(Class);
  const savedClass = await repo.save(req.body);
  return res.status(201).json(savedClass);
});

classRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  const repo = getRepository(Class);
  const classById = await repo.findOneOrFail(id);
  return res.status(200).json(classById);
});

export default classRouter;
