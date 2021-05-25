import React from "react";
import Footer from "../HomeScreen/Footer";
import Filter from "./Filter";
import ProductScreenList from "./ProductScreenList";
import "./App.css";
function Index() {
  return (
    <div>
      {/* poster */}
      <div className="products-bg">
        <div className="product-bg-heading">
          <h1>Accessories</h1>
          <h3>WOrkout</h3>
        </div>
      </div>

      <Filter />
      <ProductScreenList />
      <Footer />
    </div>
  );
}

export default Index;
