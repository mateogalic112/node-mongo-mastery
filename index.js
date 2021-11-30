const mongoose = require('mongoose');
const path = require('path');

process.on('uncaughtException', (err) => {
  console.log(err.name, err.message);
  process.exit(1);
});

require('dotenv').config({ path: path.resolve(__dirname, './.env') });

const app = require('./app');

const DB = process.env.MONGO_URI;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => console.log('DB Connection successful!'));

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => console.log('App running'));

process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
