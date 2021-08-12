import express from "express";
import colors from "colors";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import connectToDatabase from "./DB.js";
import productRoute from "./Routes/ProductRoute.js";
import UserLoginSignUp from "./Routes/UserLoginSignUp.js";
import cartRoute from "./Routes/CartRoute.js";
import WishListRouter from "./Routes/WishListRoute.js";
import CheckOutRoute from "./Routes/CheckoutRoute.js";
import ShippingAddressRoute from "./Routes/AddressRoute.js";
import DeleteAllCartRoute from "./Routes/DeleteAllCartItems.js";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();
const __dirname = path.resolve();

connectToDatabase();

app.get("/", (req, res) => {
  res.send("API is running....");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`.yellow.underline.bold.inverse);
});

// routes
app.use("/api/products", productRoute);
app.use("/api/users", UserLoginSignUp);
app.use("/api/cart", cartRoute);
app.use("/api/deletecart", DeleteAllCartRoute);
app.use("/api/wishlist", WishListRouter);
app.use("/api/checkout", CheckOutRoute);
app.use("/api/address", ShippingAddressRoute);

// app.use("/api/users",)

// custome err handeling
app.use((err, req, res, next) => {
  console.log(err);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
});
// 404 handling
app.use("*", function (req, res) {
  return res.status(400).json({ error: "Page Not Found" });
});
