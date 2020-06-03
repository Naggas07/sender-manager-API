const SubProduct = require("../models/subProduct.model");

module.exports.create = (req, res, next) => {
  const { name, product, description } = req.body;

  const subProduct = {
    name,
    product,
    description,
  };

  SubProduct.create(subProduct)
    .then((item) => {
      res.status(201).json(item);
    })
    .catch((err) => next(err));
};

module.exports.getAll = (_, res, next) => {
  SubProduct.find()
    .then((items) => {
      res.status(200).json(items);
    })
    .catch((err) => next(err));
};

module.exports.getAllProduct = (req, res, next) => {
  const { product } = req.params;

  SubProduct.find({ product })
    .then((items) => {
      res.status(200).json(items);
    })
    .catch((err) => next(err));
};

module.exports.getState = (req, res, next) => {
  const { state } = req.body;

  SubProduct.find({ state })
    .then((items) => {
      res.status(200).json(items);
    })
    .catch((err) => next(err));
};

module.exports.update = (req, res, next) => {
  const { id } = req.params;
  const { state } = req.body;

  console.log(id);

  const toUpadte = {
    state,
    inactiveDate: state === "Inactivo" ? new Date() : null,
  };

  SubProduct.findByIdAndUpdate(id, toUpadte, { new: true })
    .then((product) => res.status(200).json(product))
    .catch((err) => next(err));
};
