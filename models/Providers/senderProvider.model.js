const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { camelCase } = require("../../config/normalize/normalize");

const senderProviderSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      uppercase: true,
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
    contractEnd: {
      type: Date,
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
        delete ret.password;
        delete ret.__v;
        return ret;
      },
    },
  }
);

const SenderProvider = mongoose.model("SenderProvider", senderProviderSchema);

module.exports = SenderProvider;
