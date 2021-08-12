import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min:4,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min:4,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema)
export default User