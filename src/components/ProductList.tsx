import { fetchProducts } from "@lib/data";
import React, { Fragment } from "react";
import { ProductCard } from "@/components/ProductCard";

const ProductList = async () => {
  const products = await fetchProducts();

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
      {products.map((product, idx) => (
        <Fragment key={idx}>
          <ProductCard {...product} />
        </Fragment>
      ))}
    </div>
  );
};

export default ProductList;
