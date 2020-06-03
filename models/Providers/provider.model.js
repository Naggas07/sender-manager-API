const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { camelCase } = require("../../config/normalize/normalize");

const ProviderSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      uppercase: true,
      unique: true,
    },
    description: {
      type: String,
      default: null,
    },
    state: {
      type: String,
      enum: ["Activo", "Inactivo", "Pte aprobación", "Obsoleto"],
      default: "Pte aprobación",
    },
    inactiveDate: {
      type: Date,
      default: null,
    },
    type: {
      type: String,
      enum: ["Envios", "Otros", null],
      default: null,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (doc, ret) => {
        ret.id = doc.id;
        ret.name = camelCase(doc.name);
        delete ret._id;
        delete ret.__v;
        return ret;
      },
    },
  }
);

ProviderSchema.virtual("contacts", {
  ref: "ContactProvider",
  localField: "_id",
  foreignField: "provider",
  justOne: false,
});

ProviderSchema.virtual("channels", {
  ref: "ChannelProvider",
  localField: "_id",
  foreignField: "provider",
  justOne: false,
});

const Provider = mongoose.model("Provider", ProviderSchema);

module.exports = Provider;
