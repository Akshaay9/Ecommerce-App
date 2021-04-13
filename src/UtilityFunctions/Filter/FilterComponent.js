import React, { useEffect, useState } from "react";
import { maxPriceofProductsPresent, minPriceofProductsPresent, allTheProductTags } from "./FilterFunctions"


function FilterUtility({dispatch, products}) {

    // for checking the ckeckboxes
    const [sortByPrice, setSortByPrice] = useState();
    const [sortByRating, setSortByRating] = useState();
    const [sortByDelivery, setSortByDelivery] = useState();
    // to store checked tags, further this array will be sent to useReducer to map and filter all elements whose tags present here
    const [productTags, setProductTags] = useState([]);
  
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
    const maxPriceofProductPresent = maxPriceofProductsPresent(products)
  
  
    // get min price of a product
    const minPriceofProductPresent = minPriceofProductsPresent(products)
  
  
    // get all tags of the cloth
    const setOfAllTheTagsOfProduct = allTheProductTags(products)
  
  
    useEffect(() => {
      dispatch({
        type: "FILTER_BY_PRODUCT_TAGS",
        payload: productTags,
      });
    }, [productTags]);
  
  
   
  
    // clear the filyer
    const clearFilter = () => {
      dispatch({
        type: "CLEAR_FILTERS",
      });
      setSortByPrice();
      setSortByRating();
      setSortByRating();
      setProductTags([]);
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
        <div className="filter-mobile-heading">
          <h3>Filters</h3>
          <>
            {showFilter.mobileFilter === "" ? (
              <i
                class="fas fa-chevron-down"
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
                class="fas fa-chevron-up"
                style={{ marginTop: "3px", marginLeft: "3px" }}
                onClick={() => setShowFilter({ ...showFilter, mobileFilter: "" })}
              ></i>
            )}
          </>{" "}
        </div>
  
        <div className={`filter ${showFilter.mobileFilter==""?"filter-mobile-hide":"filter-mobile"}`}>
          <h3 className="filter-heading">Filters : </h3>
          {/* price filter */}
          <ul>
            <h3 className="filter-heading-sort-prices">
              Sort By Price
              <>
                {showFilter.priceSort === "" ? (
                  <i
                    class="fas fa-chevron-down"
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
                    class="fas fa-chevron-up"
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
                    checked={sortByPrice === "priceLowToHigh" ? true : false}
                    onChange={() => setSortByPrice("priceLowToHigh")}
                    onClick={() =>
                      dispatch({ type: "LOW_TO_HIGH" })
                    }
                  />
                </li>
                <li>
                  {" "}
                  <label htmlFor="">High To Low</label>{" "}
                  <input
                    type="radio"
                    name="price"
                    checked={sortByPrice === "priceHighToLow" ? true : false}
                    onChange={() => setSortByPrice("priceHighToLow")}
                    onClick={() =>
                      dispatch({ type: "HIGH_TO_LOW" })
                    }
                  />
                </li>
              </div>
            )}
          </ul>
  
          {/* Rating Filter */}
          <ul>
            <h3 className="filter-heading-sort-rating">
              Sort By Rating{" "}
              <>
                {showFilter.starSort === "" ? (
                  <i
                    class="fas fa-chevron-down"
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
                    class="fas fa-chevron-up"
                    style={{ marginTop: "3px", marginLeft: "3px" }}
                    onClick={() => setShowFilter({ ...showFilter, starSort: "" })}
                  ></i>
                )}
              </>
            </h3>
            {showFilter.starSort === "rating-container" && (
              <div className="filter-heading-sort-rating-container">
                <li>
                  {" "}
                  <label htmlFor="">4 Star and above</label>{" "}
                  <input
                    type="radio"
                    name="star"
                    checked={sortByRating === "fourStar" ? true : false}
                    onChange={() => setSortByRating("fourStar")}
                    onClick={() =>
                      dispatch({ type: "RATING", payload: 4 })
                    }
                  />
                </li>
                <li>
                  {" "}
                  <label htmlFor="">3 Star and above</label>{" "}
                  <input
                    type="radio"
                    name="star"
                    checked={sortByRating === "threeStar" ? true : false}
                    onChange={() => setSortByRating("threeStar")}
                    onClick={() =>
                      dispatch({ type: "RATING", payload: 3 })
                    }
                  />
                </li>
                <li>
                  {" "}
                  <label htmlFor="">2 Star and above</label>{" "}
                  <input
                    type="radio"
                    name="star"
                    checked={sortByRating === "twoStar" ? true : false}
                    onChange={() => setSortByRating("twoStar")}
                    onClick={() =>
                      dispatch({ type: "RATING", payload: 2 })
                    }
                  />
                </li>
                <li>
                  {" "}
                  <label htmlFor="">1 Star and above</label>{" "}
                  <input
                    type="radio"
                    name="star"
                    checked={sortByRating === "oneStar" ? true : false}
                    onChange={() => setSortByRating("oneStar")}
                    onClick={() =>
                      dispatch({ type: "RATING", payload: 1 })
                    }
                  />
                </li>
              </div>
            )}
          </ul>
          {/* Product Delivery Filter */}
          <ul>
            <h3 className="filter-heading-sort-delivery">
              Product Delivery{" "}
              <>
                {showFilter.deliverySort === "" ? (
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
                    checked={sortByDelivery === "freeHomeDelivery" ? true : false}
                    onChange={() => setSortByDelivery("freeHomeDelivery")}
                    onClick={() =>
                      dispatch({ type: "FREE_DELIVERY" })
                    }
                  />
                </li>
                <li>
                  {" "}
                  <label htmlFor="">Express delivery</label>{" "}
                  <input
                    type="radio"
                    name="delivery"
                    checked={sortByDelivery === "expressDelivery" ? true : false}
                    onChange={() => setSortByDelivery("expressDelivery")}
                    onClick={() =>
                      dispatch({ type: "EXPRESS_DELIVERY" })
                    }
                  />
                </li>
              </div>
            )}
          </ul>
  
          {/* Product Tags Filter */}
          <ul>
            <h3 className="filter-heading-sort-delivery">
              Products{" "}
              <>
                {showFilter.productTags === "" ? (
                  <i
                    class="fas fa-chevron-down"
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
                    class="fas fa-chevron-up"
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
                      checked={productTags.indexOf(ele) >= 0}
                      onClick={() => {
                        const isTagAlredyChecked = productTags.indexOf(ele);
                        if (isTagAlredyChecked >= 0)
                          setProductTags((items) =>
                            items.filter((prod) => prod !== ele)
                          );
                        else setProductTags((prod) => [...prod, ele]);
                      }}
                    />
                  </li>
                ))}
              </div>
            )}
          </ul>
  
          <div className="priceRange">
            <h3 className="filter-heading-sort-priceRange">
              Price Range{" "}
              <>
                {showFilter.priceRange === "" ? (
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
            <h3 className="filter-heading-sort-priceRange">
              <button
                style={{ borderRadius: "0px" }}
                className="btn-secondary btn-secondary-hr-outline-in clear-filter-btn"
                onClick={() => clearFilter()}
              >
                Clear Filter
              </button>
            </h3>
          </div>
        </div>
      </>
    );
  }
  
  export default FilterUtility;