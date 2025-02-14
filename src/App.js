/* eslint-disable react/no-direct-mutation-state */
import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
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
import SearchComponent from "./Components/Search/Index";
import Products from "./Screens/ProductScreen/Index";
import Toast from "./Components/Toast/Toast";
import Login from "./Screens/Account/Login";
import SignUp from "./Screens/Account/SignUp";
import {
  loadCart,
  WishListItems,
} from "./UtilityFunctions/CartAndWishListItems";
import { useLoginContext } from "./Contexts/loginRegistrationContext/loginRegistrationContext";
import { useWishListContextProvider } from "./Contexts/WishListContext/WishListContext";
import { useCartContextProvider } from "./Contexts/CartContext/CartContext";
import Address from "./Components/CheckOutPages/Address";
import Payment from "./Components/CheckOutPages/Payment";
import FinalCheckOut from "./Components/CheckOutPages/FinalCheckOut";
import OrderSuccess from "./Components/OrderSuccessPAge/OrderSuccess";
import LoginModal from "./Components/LoginModal/LoginModal";
import PrivateRoute from "./PrivateRoute";
import UserProfile from "./Components/UserProfile/UserProfile";
import UpdateAddress from "./Components/CheckOutPages/UpdateAddress";
import { BE_URL } from "./const";

function App() {
  const [showMobileNavNar, setShowMobileNavBar] = useState(false);
  const {
    state: { userInfo },
  } = useLoginContext();

  const { cartContextDispatch } = useCartContextProvider();
  const { wishListContextDispatch } = useWishListContextProvider();

  useEffect(() => {
    if (userInfo.token) {
      loadCart(cartContextDispatch, userInfo);
      WishListItems(wishListContextDispatch, userInfo);
    }
  }, [userInfo]);

  useEffect(() => {
    (async () => {
      await axios.get(`${BE_URL}/`);
    })();
  }, []);

  return (
    <div
      style={showMobileNavNar ? { height: "93.4vh", overflow: "hidden" } : {}}
    >
      <BrowserRouter>
        <Nav
          showMobileNavNar={showMobileNavNar}
          setShowMobileNavBar={setShowMobileNavBar}
        />
        <Toast />
        <Routes>
          <Route path="/" element={<HomeScreenComponents />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/mensnewdrop" element={<MensNewDrop />} />
          <Route path="/products/womensnewdrop" element={<WomensNewDrop />} />
          <Route
            path="/products/homeworkout"
            element={<HomeWorkoutEquipments />}
          />
          <Route
            path="/products/resistancetrainingequipment"
            element={<ResistanceTrainingEquipments />}
          />
          <Route path="/products/yogaequipment" element={<YogaComponent />} />
          <Route
            path="/products/gymAccessories"
            element={<GymAccessoriesComponent />}
          />
          <Route path="/cart" element={<CartComponent />} />
          <Route path="/wishlist" element={<WishListComponent />} />
          <Route path="/products/:id" element={<SingleProductViewer />} />
          <Route path="/search" element={<SearchComponent />} />

          {/* account */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          {/* check out */}
          <Route element={<PrivateRoute />}>
            <Route path="/address" element={<Address />} />
            <Route path="/updateAddress" element={<UpdateAddress />} />
            <Route path="/updateAddress/:id" element={<UpdateAddress />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/finalCheckout" element={<FinalCheckOut />} />
          </Route>

          {/* order success page */}
          <Route element={<PrivateRoute />}>
            <Route path="/ordersuccess/:id" element={<OrderSuccess />} />
          </Route>

          {/* user profile */}
          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<UserProfile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
