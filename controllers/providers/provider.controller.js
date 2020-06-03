const Provider = require("../../models/Providers/provider.model");

module.exports.newProvider = (req, res, next) => {
  const { name, description } = req.body;

  const provider = {
    name,
    description,
  };

  Provider.create(provider)
    .then((provider) => {
      res.status(201).json(provider);
    })
    .catch((err) => next(err));
};

module.exports.getFilter = (req, res, next) => {
  const filter = {};

  Object.keys(req.body).map((key) => {
    req.body[key] ? (filter[key] = req.body[key]) : "ko";
  });

  Provider.find(filter)
    .then((providers) => {
      res.status(200).json(providers);
    })
    .catch((err) => next(err));
};

module.exports.getFilterInfo = (req, res, next) => {
  const filter = {};

  Object.keys(req.body).map((key) => {
    req.body[key] ? (filter[key] = req.body[key]) : "ko";
  });

  Provider.find(filter)
    .populate("contacts")
    .populate("channels")
    .then((providers) => {
      res.status(200).json(providers);
    })
    .catch((err) => next(err));
};
