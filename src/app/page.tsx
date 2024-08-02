import { products } from "@/constants";
import { ProductCard } from "@/components/ProductCard";
import { Fragment } from "react";

export default function Home() {
  const renderProducts = () =>
    products.map((product) => (
      <Fragment key={product.name}>
        <ProductCard {...product} />
      </Fragment>
    ));

  return (
    <section className="pt-24 lg:pt-32 pb-40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {renderProducts()}
        </div>
      </div>
    </section>
  );
}
