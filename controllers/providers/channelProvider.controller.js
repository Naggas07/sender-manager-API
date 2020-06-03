const ChannelProvider = require("../../models/Providers/chanelProviderConfig.model");

module.exports.newChannel = (req, res, next) => {
  const { channel, unitPrice, provider } = req.body;

  const Channel = {
    channel,
    unitPrice,
    provider,
  };

  ChannelProvider.create(Channel)
    .then((channel) => {
      res.status(201).json(channel);
    })
    .catch((err) => next(err));
};
