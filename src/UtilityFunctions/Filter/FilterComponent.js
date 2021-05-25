import React, { useEffect, useState } from "react";
import {
  maxPriceofProductsPresent,
  minPriceofProductsPresent,
  allTheProductTags,
} from "./FilterFunctions";

function FilterUtility({ dispatch, products, filterItems }) {
  //  to Hide or show dropdow filters
  const [showFilter, setShowFilter] = useState({
    priceSort: "",
    starSort: "",
    deliverySort: "",
    priceRange: "",
    productTags: "",
    mobileFilter: "",
  });

  // get max price of a product
  const maxPriceofProductPresent = maxPriceofProductsPresent(products);

  // get min price of a product
  const minPriceofProductPresent = minPriceofProductsPresent(products);

  // get all tags of the cloth
  const setOfAllTheTagsOfProduct = allTheProductTags(products);

  // clear the filyer
  const clearFilter = () => {
    dispatch({
      type: "CLEAR_FILTERS",
    });
    setShowFilter({
      priceSort: "",
      starSort: "",
      deliverySort: "",
      priceRange: "",
      productTags: "",
    });
  };

  return (
    <>
      <div
        className="filter-mobile-heading"
        onClick={() => {
          {
            showFilter.mobileFilter === ""
              ? setShowFilter({
                  ...showFilter,
                  mobileFilter: "price-container",
                })
              : setShowFilter({ ...showFilter, mobileFilter: "" });
          }
        }}
      >
        <h3>Filters</h3>
        <>
          {showFilter.mobileFilter === "" ? (
            <i
              className="fas fa-chevron-down"
              style={{ marginTop: "3px", marginLeft: "3px" }}
              onClick={() =>
                setShowFilter({
                  ...showFilter,
                  mobileFilter: "price-container",
                })
              }
            ></i>
          ) : (
            <i
              className="fas fa-chevron-up"
              style={{ marginTop: "3px", marginLeft: "3px" }}
              onClick={() => setShowFilter({ ...showFilter, mobileFilter: "" })}
            ></i>
          )}
        </>{" "}
      </div>

      <div
        className={`filter ${
          showFilter.mobileFilter == "" ? "filter-mobile-hide" : "filter-mobile"
        }`}
      >
        <h3 className="filter-heading">Filters : </h3>
        {/* price filter */}
        <ul>
          <h3
            className="filter-heading-sort-prices"
            onClick={() => {
              showFilter.priceSort === ""
                ? setShowFilter({
                    ...showFilter,
                    priceSort: "price-container",
                  })
                : setShowFilter({ ...showFilter, priceSort: "" });
            }}
          >
            Sort By Price
            <>
              {showFilter.priceSort === "" ? (
                <i
                  className="fas fa-chevron-down"
                  style={{ marginTop: "3px", marginLeft: "3px" }}
                  onClick={() =>
                    setShowFilter({
                      ...showFilter,
                      priceSort: "price-container",
                    })
                  }
                ></i>
              ) : (
                <i
                  className="fas fa-chevron-up"
                  style={{ marginTop: "3px", marginLeft: "3px" }}
                  onClick={() =>
                    setShowFilter({ ...showFilter, priceSort: "" })
                  }
                ></i>
              )}
            </>{" "}
          </h3>
          {showFilter.priceSort === "price-container" && (
            <div className="filter-heading-sort-prices-container">
              <li>
                {" "}
                <label htmlFor="">Low To High</label>{" "}
                <input
                  type="radio"
                  name="price"
                  checked={filterItems.sort === "lowToHigh" ? true : false}
                  onChange={() => dispatch({ type: "LOW_TO_HIGH" })}
                />
              </li>
              <li>
                {" "}
                <label htmlFor="">High To Low</label>{" "}
                <input
                  type="radio"
                  name="price"
                  checked={filterItems.sort === "HighToLow" ? true : false}
                  onChange={() => dispatch({ type: "HIGH_TO_LOW" })}
                />
              </li>
            </div>
          )}
        </ul>

        {/* Rating Filter */}
        <ul>
          <h3
            className="filter-heading-sort-rating"
            onClick={() => {
              showFilter.starSort === ""
                ? setShowFilter({
                    ...showFilter,
                    starSort: "rating-container",
                  })
                : setShowFilter({ ...showFilter, starSort: "" });
            }}
          >
            Sort By Rating{" "}
            <>
              {showFilter.starSort === "" ? (
                <i
                  className="fas fa-chevron-down"
                  style={{ marginTop: "3px", marginLeft: "3px" }}
                  onClick={() =>
                    setShowFilter({
                      ...showFilter,
                      starSort: "rating-container",
                    })
                  }
                ></i>
              ) : (
                <i
                  className="fas fa-chevron-up"
                  style={{ marginTop: "3px", marginLeft: "3px" }}
                  onClick={() => setShowFilter({ ...showFilter, starSort: "" })}
                ></i>
              )}
            </>
          </h3>
          {showFilter.starSort === "rating-container" && (
            <div className="filter-heading-sort-rating-container filter-tags li">
              <li>
                {" "}
                <label htmlFor="">4 Star and above</label>{" "}
                <input
                  type="radio"
                  name="star"
                  checked={filterItems.rating === 4 ? true : false}
                  onChange={() => dispatch({ type: "RATING", payload: 4 })}
                />
              </li>
              <li>
                {" "}
                <label htmlFor="">3 Star and above</label>{" "}
                <input
                  type="radio"
                  name="star"
                  checked={filterItems.rating === 3 ? true : false}
                  onChange={() => dispatch({ type: "RATING", payload: 3 })}
                />
              </li>
              <li>
                {" "}
                <label htmlFor="">2 Star and above</label>{" "}
                <input
                  type="radio"
                  name="star"
                  checked={filterItems.rating === 2 ? true : false}
                  onChange={() => dispatch({ type: "RATING", payload: 2 })}
                />
              </li>
              <li>
                {" "}
                <label htmlFor="">1 Star and above</label>{" "}
                <input
                  type="radio"
                  name="star"
                  checked={filterItems.rating === 1 ? true : false}
                  onChange={() => dispatch({ type: "RATING", payload: 1 })}
                />
              </li>
            </div>
          )}
        </ul>
        {/* Product Delivery Filter */}
        <ul>
          <h3
            className="filter-heading-sort-delivery"
            onClick={() => {
              showFilter.deliverySort === ""
                ? setShowFilter({
                    ...showFilter,
                    deliverySort: "delivery-container",
                  })
                : setShowFilter({ ...showFilter, deliverySort: "" });
            }}
          >
            Product Delivery{" "}
            <>
              {showFilter.deliverySort === "" ? (
                <i
                  className="fas fa-chevron-down"
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
                  className="fas fa-chevron-up"
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
                  checked={filterItems.delivery === "free" ? true : false}
                  onChange={() => dispatch({ type: "FREE_DELIVERY" })}
                />
              </li>
              <li>
                {" "}
                <label htmlFor="">Express delivery</label>{" "}
                <input
                  type="radio"
                  name="delivery"
                  checked={filterItems.delivery === "express" ? true : false}
                  onChange={() => dispatch({ type: "EXPRESS_DELIVERY" })}
                />
              </li>
            </div>
          )}
        </ul>

        {/* Product Tags Filter */}
        <ul>
          <h3
            className="filter-heading-sort-delivery"
            onClick={() => {
              showFilter.productTags === ""
                ? setShowFilter({
                    ...showFilter,
                    productTags: "productTag-container",
                  })
                : setShowFilter({ ...showFilter, productTags: "" });
            }}
          >
            Products{" "}
            <>
              {showFilter.productTags === "" ? (
                <i
                  className="fas fa-chevron-down"
                  style={{ marginTop: "3px", marginLeft: "3px" }}
                  onClick={() =>
                    setShowFilter({
                      ...showFilter,
                      productTags: "productTag-container",
                    })
                  }
                ></i>
              ) : (
                <i
                  className="fas fa-chevron-up"
                  style={{ marginTop: "3px", marginLeft: "3px" }}
                  onClick={() =>
                    setShowFilter({ ...showFilter, productTags: "" })
                  }
                ></i>
              )}
            </>
          </h3>
          {showFilter.productTags === "productTag-container" && (
            <div className="filter-heading-sort-delivery-container filter-tags-mobile">
              {setOfAllTheTagsOfProduct.map((ele) => (
                <li>
                  <label htmlFor="">{ele}</label>
                  <input
                    type="checkbox"
                    checked={filterItems.productTags.indexOf(ele) >= 0}
                    onChange={() =>
                      dispatch({
                        type: "FILTER_BY_PRODUCT_TAGS",
                        payload: ele,
                      })
                    }
                  />
                </li>
              ))}
            </div>
          )}
        </ul>

        <div className="priceRange">
          <h3
            className="filter-heading-sort-priceRange"
            onClick={() => {
              showFilter.priceRange === ""
                ? setShowFilter({
                    ...showFilter,
                    priceRange: "input-contsiner",
                  })
                : setShowFilter({ ...showFilter, priceRange: "" });
            }}
          >
            Price Range{" "}
            <>
              {showFilter.priceRange === "" ? (
                <i
                  className="fas fa-chevron-down"
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
                  className="fas fa-chevron-up"
                  style={{ marginTop: "3px", marginLeft: "3px" }}
                  onClick={() =>
                    setShowFilter({ ...showFilter, priceRange: "" })
                  }
                ></i>
              )}
            </>
          </h3>
          {showFilter.priceRange === "input-contsiner" && (
            <div className="filter-heading-sort-priceRange-contsiner">
              <input
                type="range"
                min={minPriceofProductPresent}
                max={maxPriceofProductPresent}
                onChange={(e) =>
                  dispatch({
                    type: "PRICE_RANGE",
                    payload: e.target.value,
                  })
                }
              />
            </div>
          )}
        </div>
        <div className="button-filter">
       
            <button
              style={{ borderRadius: "0px" }}
              className="btn-secondary btn-secondary-hr-outline-in clear-filter-btn"
              onClick={() => clearFilter()}
            >
              Clear Filter
            </button>
  
        </div>
      </div>
    </>
  );
}

export default FilterUtility;
