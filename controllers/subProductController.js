const SubProduct = require("../models/subProduct.model");

module.exports.create = (req, res, next) => {
  const { name, product, description } = req.body;

  const subProduct = {
    name,
    product,
    description,
  };
};
