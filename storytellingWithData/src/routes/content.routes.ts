import { Router } from 'express';
import { getRepository } from 'typeorm';
import Content from '../models/Content';

const contentRouter = Router();

contentRouter.post('/', async (req, res) => {
  const repo = getRepository(Content);
  const savedContent = await repo.save(req.body);
  return res.status(201).json(savedContent);
});

export default contentRouter;
