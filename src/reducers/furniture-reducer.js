import {
  GET_ALL_PRODUCTS,
  GET_PRODUCT_BY_CATEGORY,
  GET_PRODUCT_BY_ID,
} from "../action-constants/product-action-constant";

import { initialProductData } from "../mock-data/mock-furniture-data";

export default function productReducer(
  productData = initialProductData,
  action
) {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return initialProductData;

    case GET_PRODUCT_BY_CATEGORY:
      // Make HTTP request here filteredProducts will contain the data. For now, I just re-assign variable
      productData = initialProductData;

      const filteredProducts = productData.filter(
        (product) => product.category === action.payload
      );

      return filteredProducts;

    case GET_PRODUCT_BY_ID:
      // Make HTTP request here filteredProducts will contain the data. For now, I just re-assign variable
      productData = initialProductData;

      const foundProductData = productData.filter(
        (product) => product.id === action.payload
      );

      return foundProductData;

    default:
      return productData;
  }
}
