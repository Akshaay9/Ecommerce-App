import mongoose from "mongoose";
const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    orderItems: [
      {
        productID: {
            type: mongoose.Schema.Types.ObjectId,
          ref: "Products"
        },
        inCartQty: {
            type: Number,
        }
      },
    ],
    shippingAddress: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: Number, required: true },
      country: { type: String, required: true },
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    paymentResult: {
      id: {
        type: String,
      },
      status: {
        type: String,
      },
      update_time: {
        type: String,
      },
      email_address: {
        type: String,
      },
    },
    isDelivered: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
const Checkout = mongoose.model("Checkout", orderSchema);
export default Checkout;
