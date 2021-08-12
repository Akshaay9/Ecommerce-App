import mongoose from "mongoose"

const wishListSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
 
    productID: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Products"
    },
},  {
    timestamps: true,
  }
)

const WishList = mongoose.model("WishList", wishListSchema)
export default WishList