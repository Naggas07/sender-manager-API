const ContactProvider = require("../../models/Providers/contactProvider.model");

module.exports.newContact = (req, res, next) => {
  const { name, lastNames, email, phone, department, provider } = req.body;

  console.log("entras");

  const contact = {
    name,
    lastNames,
    email,
    phone,
    department,
    provider,
  };

  ContactProvider.create(contact)
    .then((contact) => {
      res.status(201).json(contact);
    })
    .catch((err) => next(err));
};
