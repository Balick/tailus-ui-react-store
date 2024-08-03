import React from "react";
import { cn } from "@lib/utils";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { List } from "@tailus-ui/typography";
import { SizeRadioGroup } from "@/components/SizeRadioGroup";
import Button from "@tailus-ui/Button";

export function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-[#f5f5f5] dark:bg-[#222222]",
        className,
      )}
      {...props}
    />
  );
}

export const ProductListSkeleton = ({ items = 6 }: { items?: number }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
      {Array(items)
        .fill(0)
        .map((_, i) => (
          <div key={i} className="group block space-y-3">
            <AspectRatio
              ratio={9 / 12}
              className="relative overflow-hidden rounded-[--card-radius] before:absolute before:inset-0 before:z-[1] before:bg-gray-100 before:mix-blend-darken"
            >
              <Skeleton className="size-full" />
            </AspectRatio>
            <div className="px-0.5">
              <div className="flex justify-between">
                <Skeleton className="h-4 w-1/2" />
                <div className="flex gap-2">
                  <Skeleton className="h-4 w-7" />
                  <Skeleton className="h-4 w-7" />
                </div>
              </div>
              <Skeleton className="h-4 w-full mt-2" />
            </div>
          </div>
        ))}
    </div>
  );
};

export const ProductSkeleton = () => {
  return (
    <div className="grid gap-12 lg:grid-cols-2">
      <div className="-mx-6 flex snap-x snap-proximity gap-4 overflow-x-auto px-6 lg:grid lg:grid-cols-2 lg:gap-6 lg:overflow-visible">
        <div className="relative h-[28rem] w-max min-w-80 snap-center overflow-hidden rounded-[--card-radius] lg:col-span-2 lg:w-fit lg:min-w-full lg:max-w-full">
          <Skeleton className="size-full rounded-[--card-radius]" />
        </div>
        <div className="relative h-[28rem] w-max min-w-80 snap-center overflow-hidden rounded-[--card-radius] lg:w-fit lg:min-w-full lg:max-w-full">
          <Skeleton className="size-full rounded-[--card-radius]" />
        </div>
        <div className="relative h-[28rem] w-max min-w-80 snap-center rounded-[--card-radius] lg:w-fit lg:min-w-full lg:max-w-full">
          <Skeleton className="size-full rounded-[--card-radius]" />
        </div>
      </div>

      <div className="lg:pt-12">
        <div className="mx-auto max-w-sm">
          <div>
            <Skeleton className="mb-3 h-8 w-52" />
            <Skeleton className="h-6 w-52" />
            <Skeleton className="mb-0 mt-6 h-5 w-10" />
          </div>

          <form className="my-8 space-y-6">
            <SizeRadioGroup />
            <Button.Root className="w-full" size="lg" intent="neutral">
              <Button.Label>Add to Bag</Button.Label>
            </Button.Root>
          </form>

          <div>
            <Skeleton className="w-full h-8" />

            <List>
              <Skeleton className="h-3 w-20" />
              <Skeleton className="h-3 w-20" />
              <Skeleton className="h-3 w-20" />
              <Skeleton className="h-3 w-20" />
              <Skeleton className="h-3 w-20" />
            </List>
          </div>

          <Skeleton className="w-full h-[241px] sm:w-[384px]" />
        </div>
      </div>
    </div>
  );
};
