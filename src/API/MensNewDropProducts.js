import { mensNewDrop } from "../Data.js/MensNewDrop";
import { womensDrop } from "../Data.js/WomensNewDrop";
import { createServer } from "miragejs";
import {homeWorkoutEquipments} from "../Data.js/HomeWorkoutEquipments"
import { resistanceTrainingEquipment } from "../Data.js/ResistanceTrainingEquipments";
import { yogaEquipment } from "../Data.js/YogaEquipments";
import { gymAccesories } from "../Data.js/GymAccessories";

const allProducts=[...mensNewDrop,...womensDrop,...homeWorkoutEquipments,...resistanceTrainingEquipment,...yogaEquipment,...gymAccesories]

export const mensNewDropProductListAPI = () => {
  createServer({
    routes() {
      this.namespace = "api";
      this.get("/products/mensNewDrops", () => {
        return {
          products: mensNewDrop,
        };
      });
      this.namespace = "api1";
      this.get("/products/womensNewDrop", () => {
        return {
          products: womensDrop,
        };
      });
      this.namespace = "api2";
      this.get("/products/homeWorkout", () => {
        return {
          products: homeWorkoutEquipments,
        };
      });
      this.namespace = "api3";
      this.get("/products/resistanceEquipments", () => {
        return {
          products: resistanceTrainingEquipment,
        };
      });
      this.namespace = "api4";
      this.get("/products/yogaEquipment", () => {
        return {
          products: yogaEquipment,
        };
      });
      this.namespace = "api5";
      this.get("/products/gymAccessories", () => {
        return {
          products: gymAccesories,
        };
      });
      this.namespace = "api6";
      this.get("/products/all", () => {
        return {
          products: allProducts,
        };
      });
    },
  });
};
