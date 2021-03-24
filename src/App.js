import React from "react";
import "./App.css";
import Footer from "./Screens/HomeScreen/Footer";
import HomeScreen from "./Screens/HomeScreen/Index";
import Nav from "./Screens/HomeScreen/Nav";
import HomeScreenComponents from "./Screens/HomeScreen/Index"
import MensNewDrop from "./Screens/MensNewDrop/Index"
import WomensNewDrop from "./Screens/WomensNewDrop/Index"
import HomeWorkoutEquipments from "./Screens/HomeWorkoutEquipments/Index"
import ResistanceTrainingEquipments from "./Screens/ResistanceTrainingEquipments/Index"
function App() {
  return (
    <>
      <Nav />

      {/* HomeScreenComponents */}
      {/* <HomeScreenComponents/> */}
      
      {/* Mens new Drops */}
      {/* <MensNewDrop/> */}

      {/* {Womens new drop} */}
      {/* <WomensNewDrop/> */}

      {/* Home Workout Equipments */}
      {/* <HomeWorkoutEquipments/> */}

      {/* ResistanceTrainingEquipments */}
      <ResistanceTrainingEquipments/>
      
      <Footer />
    </>
  );
}

export default App;
