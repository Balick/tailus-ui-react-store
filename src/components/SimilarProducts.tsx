import { fetchProducts } from "@lib/data";
import { Fragment } from "react";
import { ProductCard } from "@/components/ProductCard";

export default async function SimilarProducts() {
  const products = await fetchProducts();
  return (
    <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
      {products.slice(1, 4).map((product, index) => (
        <Fragment key={index}>
          <ProductCard {...product} />
        </Fragment>
      ))}
    </div>
  );
}
