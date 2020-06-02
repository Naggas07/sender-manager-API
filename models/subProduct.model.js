const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { camelCase } = require("../config/normalize/normalize");

const subProductSchema = new Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    name: {
      type: String,
      required: true,
      uppercase: true,
    },
    description: {
      type: String,
      default: null,
    },
    state: {
      type: String,
      enum: ["Activo", "Inactivo", "Pte aprobación", "Obsoleto"],
      default: "Pte aprovación",
    },
    inactiveDate: {
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

const SubProduct = mongoose.model("SubProduct", subProductSchema);

module.exports = SubProduct;
