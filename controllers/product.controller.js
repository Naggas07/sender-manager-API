const Product = require("../models/products.model");

module.exports.create = (req, res, next) => {
  const { name, description, state } = req.body;

  const product = {
    name,
    description,
    state,
  };

  Product.create(product)
    .then((product) => {
      res.status(201).json(product);
    })
    .catch((err) => next(err));
};

module.exports.getAll = (_, res, next) => {
  Product.find({})
    .then((products) => {
      res.status(200).json(products);
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

  Product.findByIdAndUpdate(id, toUpadte, { new: true })
    .then((product) => res.status(200).json(product))
    .catch((err) => next(err));
};
