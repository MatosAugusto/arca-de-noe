import express from 'express';
import cors from 'cors'; // Just use in development. In production, set policies correctly!

import userRouter from './routes/userRouter.js';
import dogRouter from './routes/dogRouter.js';

const app = express();

const port = 5000;

app.use(cors()); // Just use in development. In production, set policies correctly!
app.use(express.json());
app.use('/user', userRouter);
app.use('/dog', dogRouter);

app.listen(port, () => { console.log('Listening on port ' + port); });