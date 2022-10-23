import { ProductList } from "./Data/ProductList.js";
import { UsersList } from "./Data/Users.js";
import Products from "./Models/ProductsModel.js";
import User from "./Models/UserModels.js";
import colors from "colors";
import connectToDatabase from "./DB.js";

connectToDatabase();

const importData = async () => {
  try {
    await Products.deleteMany();
    await User.deleteMany()
    await Products.insertMany(ProductList);
    await User.insertMany(UsersList);
    console.log("Products && users has been added".green.inverse);
    process.exit();
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Products.deleteMany();
    await User.deleteMany()
    console.log("products && user has been deleted".red.inverse);
    process.exit();
  } catch (error) {
    console.log(`{error}`.red.inverse);
    process.exit(1);
  }
};
if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
