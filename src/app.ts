/* eslint-disable no-console */
import express from 'express';
import cors from 'cors';
import SignS3Controller from './controllers/signS3';

require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const { PORT } = process.env;

app.get('/', (request, response) => {
  response.send({ message: 'Fuck off!!!' });
});

app.use('/signS3', SignS3Controller);

app.listen(PORT, err => {
  if (err) {
    return console.error(err);
  }

  return console.log(`Server is running on PORT ${PORT}`);
});
