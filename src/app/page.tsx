import React, { Suspense } from "react";
import { ProductListSkeleton } from "@/components/skeleton";
import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <section className="pt-24 lg:pt-32 pb-40">
      <div className="max-w-7xl mx-auto px-6">
        <Suspense fallback={<ProductListSkeleton />}>
          <ProductList />
        </Suspense>
      </div>
    </section>
  );
}
