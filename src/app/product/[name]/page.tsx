import { Title } from "@tailus-ui/typography";
import React, { Fragment, Suspense } from "react";
import { ProductListSkeleton, ProductSkeleton } from "@/components/skeleton";
import Product from "@/components/Product";
import SimilarProducts from "@/components/SimilarProducts";

export default function Page({ params }: { params: { name: string } }) {
  return (
    <>
      <section className="pt-24 sm:pt-32">
        <div className="mx-auto max-w-7xl px-6">
          <Suspense fallback={<ProductSkeleton />}>
            <Product productName={params.name} />
          </Suspense>
        </div>
      </section>

      <section className="pb-40 pt-24 sm:pt-32">
        <div className="mx-auto max-w-7xl px-6">
          <Title as="h2" size="2xl" className="mb-12">
            Similar Products
          </Title>
          <Suspense fallback={<ProductListSkeleton items={3} />}>
            <SimilarProducts />
          </Suspense>
        </div>
      </section>
    </>
  );
}
