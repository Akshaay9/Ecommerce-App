import { mensNewDrop } from "../Data.js/MensNewDrop";
import { createServer } from "miragejs"

export const mensNewDropProductList = () => {
  

  createServer({
    routes() {
      this.namespace = "api"
  
      this.get("/products/mensNewDrops", () => {
        return {
          products:mensNewDrop
        }
        
      })
    },
  })
}


