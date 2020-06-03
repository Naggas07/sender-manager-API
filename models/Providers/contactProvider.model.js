const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { camelCase } = require("../../config/normalize/normalize");

const contactProviderSchema = new Schema(
  {
    name: {
      type: String,
      uppercase: true,
      required: true,
    },
    lastNames: {
      type: String,
      uppercase: true,
      default: null,
    },
    email: {
      type: String,
      default: null,
      lowercase: true,
    },
    phone: {
      type: String,
      default: null,
    },
    department: {
      type: String,
      default: null,
    },
    provider: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Provider",
      required: true,
    },
    status: {
      type: String,
      enum: ["Activo", "Inactivo"],
      default: "Activo",
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: (doc, ret) => {
        ret.id = doc.id;
        ret.name = !ret.name ? null : camelCase(doc.name);
        ret.lastNames = !ret.lastNames ? null : camelCase(doc.lastNames);
        ret.department = !ret.department ? null : camelCase(doc.department);
        delete ret._id;
        delete ret.__v;
        return ret;
      },
    },
  }
);

const ContactProvider = mongoose.model(
  "ContactProvider",
  contactProviderSchema
);

module.exports = ContactProvider;
