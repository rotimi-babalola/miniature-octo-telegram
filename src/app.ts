/* eslint-disable no-console */
import express from 'express';

const app = express();
const PORT = 4000;

app.get('/', (request, response) => {
  response.send({ message: 'Fuck off!!!' });
});

app.listen(PORT, err => {
  if (err) {
    return console.error(err);
  }

  return console.log(`Server is running on PORT ${PORT}`);
});
