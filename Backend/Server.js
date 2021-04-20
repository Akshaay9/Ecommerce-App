import express from "express"
import colors from "colors"
import cors from "cors"
import path from "path";
import connectToDatabase from "./DB.js";
import productRoute from "./Routes/ProductRoute.js"
const app = express()
app.use(express.json());
app.use(cors());

connectToDatabase();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`.yellow.underline.bold.inverse) 
})





// routes
app.use("/api/products",productRoute)


  // custome err handeling
app.use((err, req, res, next) => {
    console.log(err);
    res.json({
      message: err.message,
      stack: process.env.NODE_ENV === "production" ? null : err.stack,
    });
});
  // 404 handling
app.use("*", function(req, res) {
  res.status(400).json("Page Not Found")
});