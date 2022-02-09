/* eslint-disable no-console */
import dotenv from 'dotenv';
import app from './app';
import 'reflect-metadata';
import './database';

dotenv.config();

app.listen(process.env.PORT, () => {
  console.log(`🏃 Running Server in port ${process.env.PORT}`);
});
