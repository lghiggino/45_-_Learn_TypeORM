import { Router } from 'express';
import { getRepository } from 'typeorm';
import Class from '../models/Class';

const classRouter = Router();

classRouter.post('/', async (req, res) => {
  const repo = getRepository(Class);
  const savedClass = await repo.save(req.body);
  return res.status(201).json(savedClass);
});

export default classRouter;
