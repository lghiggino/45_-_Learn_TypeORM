import { Router } from 'express';
// import { getCustomRepository, getRepository } from 'typeorm';
// import Class from '../models/Class';
// import ClassRepository from '../repositories/ClassRepository';

const homeRouter = Router();

// homeRouter.post('/', async (req, res) => {
//   try {
//     const repo = getRepository(Class);
//     const savedClass = await repo.save(req.body);
//     return res.status(201).json(savedClass);
//   } catch (error) {
//     if (error instanceof Error) {
//       console.error('error >>', error?.message);
//     } else {
//       console.log('error >>', error);
//     }
//   }
// });

homeRouter.get('/', async (req, res) => {
  try {
    // const { id } = req.params;
    // const repo = getRepository(Class);
    // const classById = await repo.findOneOrFail(id);
    return res.status(200).json('Hello from home');
  } catch (error) {
    if (error instanceof Error) {
      console.error('error >>', error?.message);
    } else {
      console.log('error >>', error);
    }
  }
});

homeRouter.get('/health', async (req, res) => {
  try {
    // const { id } = req.params;
    // const repo = getRepository(Class);
    // const classById = await repo.findOneOrFail(id);
    // eslint-disable-next-line prettier/prettier
    return res.status(200).json(`I'm Healthy at ${new Date().toLocaleDateString()}`);
  } catch (error) {
    if (error instanceof Error) {
      console.error('error >>', error?.message);
    } else {
      console.log('error >>', error);
    }
  }
});

export default homeRouter;
