import { mensNewDrop } from "../Data.js/MensNewDrop";
import { womensDrop } from "../Data.js/WomensNewDrop";
import { createServer } from "miragejs";

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
    },
  });
};
