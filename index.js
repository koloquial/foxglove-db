const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { createHash } = require('crypto');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true });

const connection = mongoose.connection;

async function hash(string) {
  return createHash('sha256').update(string).digest('hex');
}

connection.once('open', () => {
  console.log('MongoDB connection established.');
});

app.get('/', (req, res) => {
  res.send('Foxglove');
});

app.post('/hash', (req, res) => {
  hash(req.body.awareness)
    .then(hash => {
      res.send(hash);
    });
});

const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

app.listen(port, () => {
  console.log(`Server running.`);
});