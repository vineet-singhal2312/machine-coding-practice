import { createContext, useContext, useReducer } from "react";
import { products } from "../../data/Data";
import {
  LargeSize,
  MediumSize,
  MenProducts,
  SmallSize,
  WomenProducts,
} from "./Filter.utils";
import { FilterReducer } from "./FilterReducer";

export const FilterContext = createContext();
const initialState = {
  productList: products,
  isSmall: false,
  isMedium: false,
  isLarge: false,
  isHghToLow: false,
  isLowToHigh: false,
  isCategory: null,
};

export const FilterProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(FilterReducer, initialState);
  const smallSizeState = SmallSize(filterState, filterState.isSmall);
  const mediumSizeState = MediumSize(smallSizeState, filterState.isMedium);
  const LargeSizeState = LargeSize(mediumSizeState, filterState.isLarge);
  const MenState = MenProducts(LargeSizeState, filterState.isCategory);
  const FilteredState = WomenProducts(MenState, filterState.isCategory);

  return (
    <FilterContext.Provider
      value={{ FilteredState, filterState, filterDispatch }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFiler = () => {
  return useContext(FilterContext);
};
