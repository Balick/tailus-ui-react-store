import { Toaster } from 'sonner';
import { ProductCard } from './ProductCard';
import { SiteHeader } from './SiteHeader';
import { SiteFooter } from './SiteFooter';
import { products } from './products';

export function HomePage() {
  return (
    <>
      {/* 
            <html 
                lang="en"
                data-shade="950"
                data-rounded="medium"
            >
        */}
      <body className="bg-white dark:bg-gray-950">
        <SiteHeader />

        <Toaster position="bottom-left" />

        <main>
          <section className="pb-40 pt-24 lg:pt-32">
            <div className="mx-auto max-w-7xl px-6">
              <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((product, index) => (
                  <ProductCard {...product} key={index} />
                ))}
              </div>
            </div>
          </section>
        </main>

        <SiteFooter />
      </body>
    </>
  );
}
