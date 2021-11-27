const fs = require('fs');
const mongoose = require('mongoose');
const path = require('path');
const Tour = require('../../models/tourModel');

require('dotenv').config({ path: path.resolve('.env') });

const DB = process.env.MONGO_URI;
console.log(DB);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => console.log('DB Connection successful!'));

// READ JSON FILE
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8')
);

// IMPORT DATA INTO DB
const importData = async () => {
  try {
    await Tour.create(tours);
    console.log('Data imported! :)');
  } catch (err) {
    console.log(err);
  }
  process.exit(0);
};

// DELETE ALL DATA FROM COLLECTION
const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log('Data deleted!');
  } catch (err) {
    console.log(err);
  }
  process.exit(0);
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}

console.log(process.argv);
