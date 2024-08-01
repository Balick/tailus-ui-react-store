import Button from '@tailus-ui/Button';
import { Text, Title, List } from '@tailus-ui/typography';
import { RatingComparison, Rating } from './Rating';
import { SizeRadioGroup } from './SizeRadioGroup';
import { ProductCard } from './ProductCard';
import { SiteHeader } from './SiteHeader';
import { SiteFooter } from './SiteFooter';
import { products } from './products';
import { Toaster } from 'sonner';

export function ProductPage() {
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
          <section className="pt-24 sm:pt-32">
            <div className="mx-auto max-w-7xl px-6">
              <div className="grid gap-12 lg:grid-cols-2">
                <div className="-mx-6 flex snap-x snap-proximity gap-4 overflow-x-auto px-6 lg:grid lg:grid-cols-2 lg:gap-6 lg:overflow-visible">
                  <div className="relative w-max min-w-80 snap-center overflow-hidden rounded-[--card-radius] lg:col-span-2 lg:w-fit lg:min-w-full lg:max-w-full">
                    <img className="size-full rounded-[--card-radius] border object-cover" src="/images/store/bonnet.webp" alt="" loading="eager" />
                  </div>
                  <div className="relative w-max min-w-80 snap-center overflow-hidden rounded-[--card-radius] lg:w-fit lg:min-w-full lg:max-w-full">
                    <img className="size-full rounded-[--card-radius] border object-cover" src="/images/store/t-shirt1.webp" alt="" />
                  </div>
                  <div className="relative w-max min-w-80 snap-center overflow-hidden rounded-[--card-radius] lg:w-fit lg:min-w-full lg:max-w-full">
                    <img className="size-full rounded-[--card-radius] border object-cover" src="/images/store/gourde2.webp" alt="" />
                  </div>
                </div>
                <div className="lg:pt-12">
                  <div className="mx-auto max-w-sm">
                    <div>
                      <Title size="2xl" className="mb-3">
                        TLS Knit Cap
                      </Title>
                      <Rating rating={4} ratings={456} />
                      <Text size="base" className="mt-6">
                        $56
                      </Text>
                    </div>

                    <form action="" className="my-8 space-y-6">
                      <div>
                        <SizeRadioGroup />
                      </div>
                      <Button.Root className="w-full" size="lg" intent="neutral">
                        <Button.Label>Add to Bag</Button.Label>
                      </Button.Root>
                    </form>

                    <div>
                      <Text>
                        Exercitationem non odio animi rerum sit voluptatum mollitia deserunt aperiam nisi voluptates eaque eligendi, illo, aspernatur
                        iste voluptate beatae magnam nobis. Dignissimos.
                      </Text>

                      <List>
                        <li>List item</li>
                        <li>List item</li>
                        <li>List item</li>
                        <li>List item</li>
                        <li>List item</li>
                      </List>
                    </div>

                    <RatingComparison
                      rating={{
                        one: 0,
                        two: 0,
                        three: 0,
                        four: 5,
                        five: 95,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="pb-40 pt-24 sm:pt-32">
            <div className="mx-auto max-w-7xl px-6">
              <Title as="h2" size="2xl">
                Similar Products
              </Title>
              <div className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                {products.slice(1, 4).map((product, index) => (
                  <ProductCard key={index} {...product} />
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
