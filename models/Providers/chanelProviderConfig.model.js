const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const channelSchema = new Schema(
  {
    channel: {
      type: String,
      enum: [
        "SMS Outbound",
        "SMS Inbound",
        "Email",
        "Carta",
        "Tel Inbound",
        "Tel Outbound",
        "Video",
      ],
      require: true,
    },
    unitPrice: {
      type: Number,
      min: 0,
    },
    endDate: {
      type: Date,
      default: null,
    },
    state: {
      type: String,
      enum: ["Activo", "Inactivo", "Pte aprobación", "Obsoleto"],
      default: "Pte aprobación",
    },
    provider: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Provider",
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: (doc, ret) => {
        ret.id = doc.id;
        delete ret._id;
        delete ret.__v;
        return ret;
      },
    },
  }
);

const ChannelProvider = mongoose.model("ChannelProvider", channelSchema);

module.exports = ChannelProvider;
