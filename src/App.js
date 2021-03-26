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
import CartComponent from "./Components/CartComponent/Index"
import WishListComponent from "./Components/WishListComponent/Index"
import { useRoutingContext } from "./Contexts/RoutingContext/routingContextProvider";
function App() {

  const { route, setRoute } = useRoutingContext()

  return (
    <>
      <Nav />

      {/* {CartComponent} */}
      {route === "CartComponent" &&
        <CartComponent/> 
        }
      
      {/* Wishlists */}
      {route === "WishListComponent" &&
        <WishListComponent/> 
      }


      
      {/* HomeScreenComponents */}
      {route == "HomeScreenComponents" &&
        <HomeScreenComponents />
      }
      

      
      {/* Mens new Drops */}
      {route == "MensNewDrop" &&
        <MensNewDrop/>  
      }


      {/* {Womens new drop} */}
      {route === "WomensNewDrop" &&
         <WomensNewDrop/> 
      }

      
      {/* Home Workout Equipments */}
      {route === "HomeWorkoutEquipments" &&
         <HomeWorkoutEquipments/> 
      }


      {/* ResistanceTrainingEquipments */}
      {route === "ResistanceTrainingEquipments" &&
         <ResistanceTrainingEquipments/> 
      }
      
      <Footer />
    </>
  );

  // 

}

export default App;
