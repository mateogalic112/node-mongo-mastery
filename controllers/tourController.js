const Tour = require('../models/tourModel');

exports.checkBody = (req, res, next) => {
  const { name, price } = req.body;

  if (!name || !price) {
    return res.status(400).json({
      status: 'fail',
      message: 'Invalid name or price',
    });
  }
  next();
};

exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    /* results: tours.length,
    data: {
      tours,
    }, */
  });
};

exports.getTour = (req, res) => {
  //const id = parseInt(req.params.id);
  /* const tour = tours.find((item) => item.id === id);

  res.status(200).json({
    status: 'success',
    data: {
      tour,
    },
  }); */
};

exports.createTour = (req, res) => {
  res.status(201).json({
    status: 'success',
    /* data: {
      tour: newTour,
    }, */
  });
};

exports.updateTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tour: 'Updated tour',
    },
  });
};

exports.deleteTour = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null,
  });
};
