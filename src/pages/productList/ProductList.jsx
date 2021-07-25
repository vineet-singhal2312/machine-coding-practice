import React from "react";
import { FilterNav } from "../../components/filterNav/FilterNav";
import Header from "../../components/header/Header";
import ProductCard from "../../components/Productcard/ProductCard";
import { useFiler } from "../../providers/filter/FilterContext";

export const ProductList = () => {
  const { FilteredState } = useFiler();
  return (
    <>
      <Header />
      <div className="product-list">
        <FilterNav />
        <div className="products-menu">
          {FilteredState.productList.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};
