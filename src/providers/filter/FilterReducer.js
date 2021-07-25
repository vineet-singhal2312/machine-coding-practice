import { products } from "../../data/Data";

export const FilterReducer = (state, value) => {
  switch (value.type) {
    case "SMALL_SIZE_BUTTON_CLICKED":
      return {
        ...state,
        isSmall: true,
        isMedium: false,
        isLarge: false,
      };
    case "MEDIUM_SIZE_BUTTON_CLICKED":
      return {
        ...state,
        isSmall: false,
        isMedium: true,
        isLarge: false,
      };
    case "LARGE_SIZE_BUTTON_CLICKED":
      return {
        ...state,
        isSmall: false,
        isMedium: false,
        isLarge: true,
      };

    case "PRICE_LOW_TO_HIGH_BUTTON_CLICKED":
      return {
        ...state,
        isHighToLow: false,
        isLowToHigh: true,
        productList: state.productList.sort(function (a, b) {
          return a.price - b.price;
        }),
      };
    case "PRICE_HIGH_TO_LOW_BUTTON_CLICKED":
      return {
        ...state,
        isHighToLow: true,
        isLowToHigh: false,
        productList: state.productList.sort(function (a, b) {
          return b.price - a.price;
        }),
      };
    case "MEN_BUTTON_CLICKED":
      return {
        ...state,
        isCategory: value.payload,
      };
    case "WOMEN_BUTTON_CLICKED":
      return {
        ...state,
        isCategory: value.payload,
      };
    case "CLEAR_BUTTON_BUTTON_CLICKED":
      return {
        ...state,
        productList: products,
        isSmall: false,
        isMedium: false,
        isLarge: false,
        isHighToLow: false,
        isLowToHigh: false,
        isCategory: null,
      };
    default:
      break;
  }
};
