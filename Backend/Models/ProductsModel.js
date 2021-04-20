import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    tag: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    images: [
      {
        img: {
          type: String,
          required: true,
        },
      },
    ],
    desc: {
      type: String,
      required: true,
    },
    inStock: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    freeDelivery: {
      type: Boolean,
      required: true,
    },
    deliveredBy: {
      type: Number,
      required: true,
    },
    newArrival: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Products = mongoose.model("Products", productSchema)
export default Products