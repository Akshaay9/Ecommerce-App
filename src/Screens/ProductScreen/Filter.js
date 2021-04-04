import React, { useEffect, useState } from 'react'
import { useProductContext } from '../../Contexts/ProductListContext/Products';
import ProductScreenList from './ProductScreenList'

function Filter() {
    const [sortByPrice, setSortByPrice] = useState();
    const [sortByRating, setSortByRating] = useState();
    const [sortByDelivery, setSortByDelivery] = useState();
    const [priceRange, setPriceRange] = useState(500);
    // to store checked tags, further this array will be sent to useReducer to map and filter all elements whose tags present here
    const [productTags, setProductTags] = useState([]);
   
    //  to Hide or show dropdow filters
    const [showFilter, setShowFilter] = useState({
      priceSort: "",
      starSort: "",
      deliverySort: "",
      priceRange: "",
      productTags: "",
    });
    // grab contxt
    const {
        state: { initialProducts, loading, filterItems },
        productsDispatch,
    } = useProductContext();
    // get max price of a product
 const maxPriceofProductPresent = Math.max.apply(
    Math,
    initialProducts.map(function (o) {
      return o.price*1;
    })
   );
 
  // get min price of a product
  const minPriceofProductPresent = Math.min.apply(
    Math,
    initialProducts.map(function (o) {
      return o.price;
    })
   );
 
  // get all tags of the cloth
  const allTheTagsOfProducts = [
    ...initialProducts.map((ele) => ele.tag),
  ];
  // add it inside set or map or anything to avoid duplication
  const setOfAllTheTagsOfProducts = new Set(allTheTagsOfProducts);
  // ietrate the set inside empty array to convert set into array
  const setOfAllTheTagsOfProduct = [...setOfAllTheTagsOfProducts];
 
  useEffect(() => {
    productsDispatch({
      type: "FILTER_BY_PRODUCT_TAGS",
      payload: productTags,
    });
  }, [productTags]);
 
     const filterData = (initialHomeScrrenProducts) => {
    let mutatedProductList=JSON.parse(JSON.stringify(initialHomeScrrenProducts))
    if (filterItems.productTags.length > 0) {
      mutatedProductList=mutatedProductList.filter((ele)=>filterItems.productTags.includes(ele.tag))
    }
    if (filterItems.sort === "lowToHigh") {
      mutatedProductList.sort((a, b) => a.price - b.price);
    }
  
    if (filterItems.sort === "HighToLow") {
      mutatedProductList.sort((b, a) => a.price - b.price);
    }
 
    if (filterItems.stock === "in") {
      mutatedProductList = mutatedProductList.filter((ele) => ele.inStock >= 0);
    }
    
    if (filterItems.stock === "out") {
      mutatedProductList = mutatedProductList.filter(
        (ele) => ele.inStock === 0
      );
    }
  
    if (filterItems.rating !== false) {
      mutatedProductList = mutatedProductList.filter(
        (ele) => ele.rating >= filterItems.rating
      );
    }
   
    if (filterItems.price_range !== null) {
      mutatedProductList = mutatedProductList.filter(
        (ele) => ele.price <= filterItems.price_range
      );
    }
    
    if (filterItems.delivery === "free") {
      mutatedProductList = mutatedProductList.filter(
        (ele) => ele.freeDelivery === true
      );
    }
    
    if (filterItems.delivery === "express") {
      mutatedProductList = mutatedProductList.filter(
        (ele) => ele.freeDelivery === false
      );
    }
    return mutatedProductList;
    };
    
// clear the filyer
 const clearFilter = () => {
    productsDispatch({
     type: "CLEAR_FILTERS"
   })
   setSortByPrice()
   setSortByRating()
   setSortByRating()
   setProductTags([])
   setShowFilter({
     priceSort: "",
     starSort: "",
     deliverySort: "",
     priceRange: "",
     productTags: "",
   });
 }
 return (
    <>
    <div className="filter">
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
                  productsDispatch({ type: "LOW_TO_HIGH" })
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
                  productsDispatch({ type: "HIGH_TO_LOW" })
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
                  productsDispatch({ type: "RATING", payload: 4 })
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
                  productsDispatch({ type: "RATING", payload: 3 })
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
                  productsDispatch({ type: "RATING", payload: 2 })
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
                  productsDispatch({ type: "RATING", payload: 1 })
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
                  productsDispatch({ type: "FREE_DELIVERY" })
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
                  productsDispatch({ type: "EXPRESS_DELIVERY" })
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
          <div className="filter-heading-sort-delivery-container">
            {setOfAllTheTagsOfProduct.map((ele) => (
              <li style={{ width: "7rem" }}>
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
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              onClick={() =>
                productsDispatch({
                  type: "PRICE_RANGE",
                  payload: priceRange,
                })
              }
            />
          </div>
        )}
      </div>
      <div className="button-filter">
        <h3 className="filter-heading-sort-priceRange">
          <button
            style={{ borderRadius: "0px", padding: "0rem 0.4rem" }}
            className="btn btn-secondary btn-secondary-hr-outline-in"
            onClick={()=>clearFilter()}
          >
            Clear Filter
          </button>
        </h3>
      </div>
    </div>
    
    <ProductScreenList filterData={filterData} />
   
  </>
)
}

export default Filter
