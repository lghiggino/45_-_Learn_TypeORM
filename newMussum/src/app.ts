import express from 'express';
import routes from './routes';
import fileUpload from 'express-fileupload';
const fs = require('fs');

const app = express();
app.use(express.json());
//https://stackoverflow.com/questions/59957394/typeorm-uploading-and-serve-downloading-files
app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
}));
app.use(routes);

export default app;
