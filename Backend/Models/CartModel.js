import mongoose from "mongoose"

const cartSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
 
    productID: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Products"
    },
    inCartQty: {
        type: Number,
    }
},  {
    timestamps: true,
  }
)

const Cart = mongoose.model("Cart", cartSchema)
export default Cart