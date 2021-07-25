export function SmallSize(state, flag) {
  if (flag) {
    let filterSmallSizeProduct = state.productList.filter(
      (product) => product.size === "S"
    );
    return {
      ...state,
      productList: filterSmallSizeProduct,
    };
  } else {
    return state;
  }
}

export function MediumSize(state, flag) {
  if (flag) {
    let filterMediumSizeProduct = state.productList.filter(
      (product) => product.size === "M"
    );
    return {
      ...state,
      productList: filterMediumSizeProduct,
    };
  } else {
    return state;
  }
}
export function LargeSize(state, flag) {
  if (flag) {
    let filterLargeSizeProduct = state.productList.filter(
      (product) => product.size === "L"
    );
    return {
      ...state,
      productList: filterLargeSizeProduct,
    };
  } else {
    return state;
  }
}

export function MenProducts(state, flag) {
  if (flag === "men") {
    let filterMenProduct = state.productList.filter(
      (product) => product.category === "men"
    );
    return {
      ...state,
      productList: filterMenProduct,
    };
  } else {
    return state;
  }
}
export function WomenProducts(state, flag) {
  if (flag === "women") {
    let filterWomenProduct = state.productList.filter(
      (product) => product.category === "women"
    );
    return {
      ...state,
      productList: filterWomenProduct,
    };
  } else {
    return state;
  }
}
