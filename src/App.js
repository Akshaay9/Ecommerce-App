import React from "react";
import "./App.css";
import Footer from "./Screens/HomeScreen/Footer";
import HomeScreen from "./Screens/HomeScreen/Index";
import Nav from "./Screens/HomeScreen/Nav";
import HomeScreenComponents from "./Screens/HomeScreen/Index"
import MensNewDrop from "./Screens/MensNewDrop/Index"
function App() {
  return (
    <div>
      <Nav />

      {/* <HomeScreenComponents/> */}
      
      {/* Mens new Drops */}
      <MensNewDrop/>
      
      <Footer />
    </div>
  );
}

export default App;
