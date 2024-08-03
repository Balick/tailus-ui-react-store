import { Text, Caption } from "@tailus-ui/typography";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import type React from "react";
import { Product } from "@/types";
import Link from "next/link";
import Image from "next/image";

export const ProductCard: React.FC<Product> = async ({
  name,
  shortDescription,
  price,
  priceUnit = "$",
  oldPrice,
  image,
}) => {
  return (
    <Link href={`/product/${name}`} className="group block space-y-3">
      <AspectRatio
        ratio={9 / 12}
        className="relative overflow-hidden rounded-[--card-radius] before:absolute before:inset-0 before:z-[1] before:bg-gray-100 before:mix-blend-darken"
      >
        <Image
          className="size-full object-cover duration-300 group-hover:scale-105"
          src={image}
          width={500}
          height={500}
          alt={shortDescription}
        />
      </AspectRatio>
      <div className="px-0.5">
        <div className="flex justify-between">
          <Caption as="p" weight="medium" neutral>
            {name}
          </Caption>
          <div className="flex gap-2">
            {oldPrice && (
              <Caption as="p" className="line-through">
                {priceUnit + oldPrice}
              </Caption>
            )}
            <Text className="my-0" size="sm">
              {priceUnit + price}
            </Text>
          </div>
        </div>
        <Caption as="p">{shortDescription}</Caption>
      </div>
    </Link>
  );
};
