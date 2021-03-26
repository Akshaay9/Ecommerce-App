import { mensNewDrop } from "../Data.js/MensNewDrop"
import { createServer } from "miragejs"

export const mensNewDropProductList =()=> {
  createServer({
    routes() {
      this.get("/api/products/mensNewDrop", () => ({
        products: mensNewDrop,
      }))
    },
  })
}