const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { camelCase } = require("../config/normalize/normalize");

const productSchema = new Schema(
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

productSchema.virtual("subProducts", {
  ref: "SubProduct",
  localField: "_id",
  foreignField: "product",
  justOne: false,
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
