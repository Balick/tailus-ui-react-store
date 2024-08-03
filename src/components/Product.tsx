import { fetchProduct } from "@lib/data";
import Image from "next/image";
import { List, Text, Title } from "@tailus-ui/typography";
import { Rating, RatingComparison } from "@/components/Rating";
import { SizeRadioGroup } from "@/components/SizeRadioGroup";
import Button from "@tailus-ui/Button";
import React from "react";
import { notFound } from "next/navigation";

export default async function Product({
  productName,
}: {
  productName: string;
}) {
  const product = await fetchProduct(decodeURIComponent(productName));
  if (!product) notFound();

  return (
    <div className="grid gap-12 lg:grid-cols-2">
      <div className="-mx-6 flex snap-x snap-proximity gap-4 overflow-x-auto px-6 lg:grid lg:grid-cols-2 lg:gap-6 lg:overflow-visible">
        <div className="relative w-max min-w-80 snap-center overflow-hidden rounded-[--card-radius] lg:col-span-2 lg:w-fit lg:min-w-full lg:max-w-full">
          <Image
            src={product.image}
            alt={`image of ${product.name}`}
            width={500}
            height={500}
            priority
            className="size-full rounded-[--card-radius] border object-cover group-hover:scale-105"
          />
        </div>
        <div className="relative w-max min-w-80 snap-center overflow-hidden rounded-[--card-radius] lg:w-fit lg:min-w-full lg:max-w-full">
          <Image
            src={product.image}
            alt={`image of ${product.name}`}
            width={500}
            height={500}
            priority
            className="size-full rounded-[--card-radius] border object-cover group-hover:scale-105"
          />
        </div>
        <div className="relative w-max min-w-80 snap-center overflow-hidden rounded-[--card-radius] lg:w-fit lg:min-w-full lg:max-w-full">
          <Image
            src={product.image}
            alt={`image of ${product.name}`}
            width={500}
            height={500}
            priority
            className="size-full rounded-[--card-radius] border object-cover group-hover:scale-105"
          />
        </div>
      </div>

      <div className="lg:pt-12">
        <div className="mx-auto max-w-sm">
          <div>
            <Title size="2xl" className="mb-3">
              {product.name}
            </Title>
            <Rating rating={4} ratings={456} />
            <Text size="base" className="mb-0 mt-6">
              ${product.price}
            </Text>
          </div>

          <form className="my-8 space-y-6">
            <SizeRadioGroup />
            <Button.Root className="w-full" size="lg" intent="neutral">
              <Button.Label>Add to Bag</Button.Label>
            </Button.Root>
          </form>

          <div>
            <Text>{product.shortDescription}</Text>

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
  );
}
