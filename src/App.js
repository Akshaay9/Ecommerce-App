import React from "react";
import "./App.css";
import Footer from "./Screens/HomeScreen/Footer";
import HomeScreen from "./Screens/HomeScreen/Index";
import Nav from "./Screens/HomeScreen/Nav";
import HomeScreenComponents from "./Screens/HomeScreen/Index";
import MensNewDrop from "./Screens/MensNewDrop/Index";
import WomensNewDrop from "./Screens/WomensNewDrop/Index";
import HomeWorkoutEquipments from "./Screens/HomeWorkoutEquipments/Index";
import ResistanceTrainingEquipments from "./Screens/ResistanceTrainingEquipments/Index";
import CartComponent from "./Components/CartComponent/Index";
import WishListComponent from "./Components/WishListComponent/Index";
import SingleProductViewer from "./Components/SIngleProductViewer/Index";
import YogaComponent from "./Screens/YogaEquipments/index";
import GymAccessoriesComponent from "./Screens/GymAccessoriesScreen/Index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchComponent from "./Components/Search/Index"
import Products from "./Screens/ProductScreen/Index"
function App() {
 

  return (
    <BrowserRouter>
         <Nav/>
    <Routes>
   
      <Route path="/" element={<HomeScreenComponents />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/mensnewdrop" element={<MensNewDrop />} />
      <Route path="/products/womensnewdrop" element={<WomensNewDrop />} />
      <Route path="/products/homeworkout" element={<HomeWorkoutEquipments />} />
      <Route path="/products/resistancetrainingequipment" element={<ResistanceTrainingEquipments />} />
      <Route path="/products/yogaequipment" element={<YogaComponent />} />
      <Route path="/products/gymAccessories" element={<GymAccessoriesComponent />} />
      <Route path="/cart" element={<CartComponent />} />
      <Route path="/wishlist" element={<WishListComponent />} />
      <Route path="/products/:id" element={<SingleProductViewer />} />
      <Route path="/search" element={<SearchComponent />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
