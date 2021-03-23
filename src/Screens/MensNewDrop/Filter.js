import React, { useState } from "react";

function Filter() {
  const [sortByPrice, setSortByPrice] = useState("relevance");
  const [sortByRating, setSortByRating] = useState();
  const [sortByDelivery, setSortByDelivery] = useState();
    const [priceRange, setPriceRange] = useState(500);
    // 
    const [showPriceSortFilter,setShowPriceSortFilter]=useState(false)
    const [showStarSortFilter,setStarPriceSortFilter]=useState(false)
    const [showDeliverySortFilter, setDeliveryPriceSortFilter] = useState(false)
    const [showPriceRangeFilter, setShowPriceRangeFilter] = useState(false)
    const [showPriceRangeFilter, setShowPriceRangeFilter] = useState(false)
    
    
  return (
    <div className="filter">
      <h3 className="filter-heading">Filters : </h3>
      <ul>
        <h3 className="filter-heading-sort-prices">
          Sort By Price{" "}
          <i class="fas fa-chevron-down" style={{ marginTop: "3px" }}></i>{" "}
        </h3>
        <div className="filter-heading-sort-prices-container">
          <li>
            {" "}
            <label htmlFor="">Relevance</label>{" "}
            <input
              type="radio"
              name="price"
              checked={sortByPrice == "relevance" ? true : false}
              onClick={() => setSortByPrice("relevance")}
            />
          </li>
          <li>
            {" "}
            <label htmlFor="">Low To High</label>{" "}
            <input
              type="radio"
              name="price"
              checked={sortByPrice == "priceLowToHigh" ? true : false}
              onClick={() => setSortByPrice("priceLowToHigh")}
            />
          </li>
          <li>
            {" "}
            <label htmlFor="">High To Low</label>{" "}
            <input
              type="radio"
              name="price"
              checked={sortByPrice == "priceHighToLow" ? true : false}
              onClick={() => setSortByPrice("priceHighToLow")}
            />
          </li>
        </div>
      </ul>

      <ul>
        <h3 className="filter-heading-sort-rating">
          Sort By Rating{" "}
          <i class="fas fa-chevron-down" style={{ marginTop: "3px" }}></i>{" "}
              </h3>
              <div className="filter-heading-sort-rating-container">
        <li>
          {" "}
          <label htmlFor="">4 Star and above</label>{" "}
          <input
            type="radio"
            name="star"
            checked={sortByRating == "fourStar" ? true : false}
            onClick={() => setSortByRating("fourStar")}
          />
        </li>
        <li>
          {" "}
          <label htmlFor="">3 Star and above</label>{" "}
          <input
            type="radio"
            name="star"
            checked={sortByRating == "threeStar" ? true : false}
            onClick={() => setSortByRating("threeStar")}
          />
        </li>
        <li>
          {" "}
          <label htmlFor="">2 Star and above</label>{" "}
          <input
            type="radio"
            name="star"
            checked={sortByRating == "twoStar" ? true : false}
            onClick={() => setSortByRating("twoStar")}
          />
        </li>
        <li>
          {" "}
          <label htmlFor="">1 Star and above</label>{" "}
          <input
            type="radio"
            name="star"
            checked={sortByRating == "oneStar" ? true : false}
            onClick={() => setSortByRating("oneStar")}
          />
                  </li>
                  </div>
      </ul>
      <ul>
        <h3 className="filter-heading-sort-delivery">
          Product Delivery{" "}
          <i class="fas fa-chevron-down" style={{ marginTop: "3px" }}></i>
              </h3>
              <div className="filter-heading-sort-delivery-container">
        <li>
          {" "}
          <label htmlFor="">Free Home delivery (1 week)</label>{" "}
          <input
            type="radio"
            name="delivery"
            checked={sortByDelivery == "freeHomeDelivery" ? true : false}
            onClick={() => setSortByDelivery("freeHomeDelivery")}
          />
        </li>
        <li>
          {" "}
          <label htmlFor="">
            Express delivery in 3 days ( charges applicable)
          </label>{" "}
          <input
            type="radio"
            name="delivery"
            checked={sortByDelivery == "expressDelivery" ? true : false}
            onClick={() => setSortByDelivery("expressDelivery")}
          />
                  </li>
                  </div>
      </ul>
      <div className="priceRange">
        <h3 className="filter-heading-sort-priceRange">
          Price Range{" "}
          <i class="fas fa-chevron-down" style={{ marginTop: "3px" }}></i>{" "}
              </h3>
              <div className="filter-heading-sort-priceRange-contsiner">
        <input
          type="range"
          min="100"
          max="1000"
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
        />
        </div>
      </div>
    </div>
  );
}

export default Filter;
