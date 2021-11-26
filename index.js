const mongoose = require('mongoose');
const path = require('path');
const app = require('./app');

require('dotenv').config({ path: path.resolve(__dirname, './.env') });

const DB = process.env.MONGO_URI;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => console.log('DB Connection successful!'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('App running'));
