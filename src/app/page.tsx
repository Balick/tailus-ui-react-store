import { ProductCard } from "@/components/ProductCard";
import React, { Fragment, Suspense } from "react";
import { fetchProducts } from "@lib/data";
import {CardsSkeleton, ProductsSkeleton} from "@/components/skeletons";

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

const Home = () => {
  return (
    <section className="pt-24 lg:pt-32 pb-40">
      <div className="max-w-7xl mx-auto px-6">
        <Suspense fallback={<CardsSkeleton />}>
          <ProductList />
        </Suspense>
      </div>
    </section>
  );
};

export default Home;
