import { Router } from 'express';
import { getRepository } from 'typeorm';
import Content from '../models/Content.entity';

const contentRouter = Router();

contentRouter.post('/', async (req, res) => {
  try {
    const repo = getRepository(Content);
    const savedContent = await repo.save(req.body);
    return res.status(201).json(savedContent);
  } catch (error) {
    if (error instanceof Error) {
      console.error('error >>', error?.message);
    } else {
      console.log('error >>', error);
    }
  }

});

export default contentRouter;
