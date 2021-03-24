import React, { useState } from "react";

function Filter() {
  const [sortByPrice, setSortByPrice] = useState("relevance");
  const [sortByRating, setSortByRating] = useState();
  const [sortByDelivery, setSortByDelivery] = useState();
  const [priceRange, setPriceRange] = useState(500);
  //
  const [showFilter, setShowFilter] = useState({
    priceSort: "",
    starSort: "",
    deliverySort: "",
    priceRange: "",
  });
  return (
    <>
    <div className="filter">
      <h3 className="filter-heading">Filters : </h3>
      <ul>
        <h3 className="filter-heading-sort-prices">
          Sort By Price
          <>
            {showFilter.priceSort == "" ? (
              <i
                class="fas fa-chevron-down"
                style={{ marginTop: "3px", marginLeft: "3px" }}
                onClick={() =>
                  setShowFilter({ ...showFilter, priceSort: "price-container" })
                }
              ></i>
            ) : (
              <i
                class="fas fa-chevron-up"
                style={{ marginTop: "3px", marginLeft: "3px" }}
                onClick={() => setShowFilter({ ...showFilter, priceSort: "" })}
              ></i>
            )}
          </>{" "}
        </h3>
        {showFilter.priceSort == "price-container" && (
          <div className="filter-heading-sort-prices-container">
            <li>
              {" "}
              <label htmlFor="">Relevance</label>{" "}
              <input
                type="radio"
                name="price"
                checked={sortByPrice == "relevance" ? true : false}
                onChange={() => setSortByPrice("relevance")}
              />
            </li>
            <li>
              {" "}
              <label htmlFor="">Low To High</label>{" "}
              <input
                type="radio"
                name="price"
                checked={sortByPrice == "priceLowToHigh" ? true : false}
                onChange={() => setSortByPrice("priceLowToHigh")}
              />
            </li>
            <li>
              {" "}
              <label htmlFor="">High To Low</label>{" "}
              <input
                type="radio"
                name="price"
                checked={sortByPrice == "priceHighToLow" ? true : false}
                onChange={() => setSortByPrice("priceHighToLow")}
              />
            </li>
          </div>
        )}
      </ul>

      <ul>
        <h3 className="filter-heading-sort-rating">
          Sort By Rating{" "}
          <>
            {showFilter.starSort == "" ? (
              <i
                class="fas fa-chevron-down"
                style={{ marginTop: "3px", marginLeft: "3px" }}
                onClick={() =>
                  setShowFilter({ ...showFilter, starSort: "rating-container" })
                }
              ></i>
            ) : (
              <i
                class="fas fa-chevron-up"
                style={{ marginTop: "3px", marginLeft: "3px" }}
                onClick={() => setShowFilter({ ...showFilter, starSort: "" })}
              ></i>
            )}
          </>
        </h3>
        {showFilter.starSort == "rating-container" && (
          <div className="filter-heading-sort-rating-container">
            <li>
              {" "}
              <label htmlFor="">4 Star and above</label>{" "}
              <input
                type="radio"
                name="star"
                checked={sortByRating == "fourStar" ? true : false}
                onChange={() => setSortByRating("fourStar")}
              />
            </li>
            <li>
              {" "}
              <label htmlFor="">3 Star and above</label>{" "}
              <input
                type="radio"
                name="star"
                checked={sortByRating == "threeStar" ? true : false}
                onChange={() => setSortByRating("threeStar")}
              />
            </li>
            <li>
              {" "}
              <label htmlFor="">2 Star and above</label>{" "}
              <input
                type="radio"
                name="star"
                checked={sortByRating == "twoStar" ? true : false}
                onChange={() => setSortByRating("twoStar")}
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
        )}
      </ul>
      <ul>
        <h3 className="filter-heading-sort-delivery">
          Product Delivery{" "}
          <>
            {showFilter.deliverySort == "" ? (
              <i
                class="fas fa-chevron-down"
                style={{ marginTop: "3px", marginLeft: "3px" }}
                onClick={() =>
                  setShowFilter({
                    ...showFilter,
                    deliverySort: "delivery-container",
                  })
                }
              ></i>
            ) : (
              <i
                class="fas fa-chevron-up"
                style={{ marginTop: "3px", marginLeft: "3px" }}
                onClick={() =>
                  setShowFilter({ ...showFilter, deliverySort: "" })
                }
              ></i>
            )}
          </>
        </h3>
        {showFilter.deliverySort === "delivery-container" && (
          <div className="filter-heading-sort-delivery-container">
            <li>
              {" "}
              <label htmlFor="">Free Home delivery </label>{" "}
              <input
                type="radio"
                name="delivery"
                checked={sortByDelivery == "freeHomeDelivery" ? true : false}
                onClick={() => setSortByDelivery("freeHomeDelivery")}
              />
            </li>
            <li>
              {" "}
              <label htmlFor="">Express delivery</label>{" "}
              <input
                type="radio"
                name="delivery"
                checked={sortByDelivery == "expressDelivery" ? true : false}
                onClick={() => setSortByDelivery("expressDelivery")}
              />
            </li>
          </div>
        )}
      </ul>
      <div className="priceRange">
        <h3 className="filter-heading-sort-priceRange">
          Price Range{" "}
          <>
            {showFilter.priceRange == "" ? (
              <i
                class="fas fa-chevron-down"
                style={{ marginTop: "3px", marginLeft: "3px" }}
                onClick={() =>
                  setShowFilter({
                    ...showFilter,
                    priceRange: "input-contsiner",
                  })
                }
              ></i>
            ) : (
              <i
                class="fas fa-chevron-up"
                style={{ marginTop: "3px", marginLeft: "3px" }}
                onClick={() => setShowFilter({ ...showFilter, priceRange: "" })}
              ></i>
            )}
          </>
        </h3>
        {showFilter.priceRange == "input-contsiner" && (
          <div className="filter-heading-sort-priceRange-contsiner">
            <input
              type="range"
              min="100"
              max="1000"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
            />
          </div>
        )}
      </div>
    
      </div>
      </>
  );
}

export default Filter;
