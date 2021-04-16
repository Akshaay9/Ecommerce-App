export const maxPriceofProductsPresent = (products) => {
  let maxPriceofProductPresent;
  return (maxPriceofProductPresent = Math.max.apply(
    Math,
    products.map(function (o) {
      return o.price;
    })
  ));
};
export const minPriceofProductsPresent = (products) => {
  let minPriceofProductPresent;
  return (minPriceofProductPresent = Math.min.apply(
    Math,
    products.map(function (o) {
      return o.price;
    })
  ));
};

export const allTheProductTags = (products) => {
  const allTheTagsOfProducts = [...products.map((ele) => ele.tag)];
  // add it inside set or map or anything to avoid duplication
  const setOfAllTheTagsOfProducts = new Set(allTheTagsOfProducts);
  const setOfAllTheTagsOfProduct = [...setOfAllTheTagsOfProducts];
  return setOfAllTheTagsOfProduct;
};

export const filterData = (products, filterItems) => {
    let mutatedProductList = JSON.parse(JSON.stringify(products));
 
  if (filterItems.productTags.length > 0) {
    mutatedProductList = mutatedProductList.filter((ele) =>
      filterItems.productTags.includes(ele.tag)
    );
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
    mutatedProductList = mutatedProductList.filter((ele) => ele.inStock === 0);
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


