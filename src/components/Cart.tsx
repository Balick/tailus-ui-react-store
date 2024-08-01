import Drawer from '@tailus-ui/Drawer';
import Button from '@tailus-ui/Button';
import { CircleHelp, ShoppingBag, Trash, X } from 'lucide-react';
import { Caption, Link, Text, Title } from '@tailus-ui/typography';
import Popover from '@tailus-ui/Popover';
import type { Product } from './ProductCard';
import React, { useState } from 'react';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import { Input } from '@tailus-ui/Input';
import Select from '@tailus-ui/Select';
import { products } from './products';
import ScrollArea from '@tailus-ui/ScrollArea';
import { toast } from 'sonner';

const sizes = ['S', 'M', 'L', 'XL', 'S Tall'];

interface ItemType extends Product {
  onDelete: () => void;
}

const Item: React.FC<ItemType> = ({ name, shortDescription, price, priceUnit = '$', link, image, onDelete }) => (
  <div className="grid gap-3 border-b py-4 [grid-template-columns:auto_1fr] first:pt-0 last:border-b-0 last:pb-0">
    <a href={link} aria-label={`Go to ${name}`} className="block w-24">
      <AspectRatio
        ratio={1 / 1}
        className="relative overflow-hidden rounded-[--card-radius] before:absolute before:inset-0 before:z-[1] before:bg-gray-100 before:mix-blend-darken"
      >
        <img className="size-full object-cover duration-300 group-hover:scale-105" src={image} alt={shortDescription} />
      </AspectRatio>
    </a>
    <div className="py-0.5">
      <div className="flex justify-between">
        <Title size="base" as="div" weight="medium">
          {name}
        </Title>
        <Button.Root size="xs" intent="gray" variant="ghost" onClick={onDelete}>
          <Button.Label className="sr-only">Delete</Button.Label>
          <Button.Icon size="xs" type="only">
            <Trash />
          </Button.Icon>
        </Button.Root>
      </div>
      <Caption size="sm" className="mb-4">
        {shortDescription}
      </Caption>

      <div className="flex items-center justify-between">
        <Caption size="sm" weight="medium" neutral>
          {priceUnit}
          {price}
        </Caption>
        <div className="flex w-fit gap-3">
          <Select.Root defaultValue="L">
            <Select.Trigger size="sm" variant="plain" className="h-7 w-fit">
              <Select.Value />
              <Select.Icon className="opacity-75" />
            </Select.Trigger>
            <Select.Portal>
              <Select.Content mixed className="z-20">
                <Select.Viewport>
                  {sizes.map((size, index) => (
                    <Select.Item value={size} key={index}>
                      <Select.ItemIndicator />
                      <Select.ItemText>{size}</Select.ItemText>
                    </Select.Item>
                  ))}
                </Select.Viewport>
              </Select.Content>
            </Select.Portal>
          </Select.Root>
          <Input defaultValue={1} type="number" name="quantity" variant="outlined" size="sm" className="h-7 w-16 hover:bg-[--ui-soft-bg]" />
        </div>
      </div>
    </div>
  </div>
);

export const Cart = () => {
  const [cartProducts, setCartProducts] = useState(products);

  const handleDelete = (product: Product) => {
    setCartProducts((prevProducts) => prevProducts.filter((p) => p !== product));
    toast.message('Product Deleted!', {
      description: `You deleted "${product.name}" from your cart.`,
    });
  };

  return (
    <Drawer.Root direction="right">
      <div className="relative">
        {cartProducts.length > 0 && <span className="absolute right-1 top-1 block size-1 rounded-full bg-danger-600" aria-hidden />}
        <Drawer.Trigger asChild>
          <Button.Root size="sm" intent="gray" variant="ghost">
            <Button.Label className="sr-only">Cart</Button.Label>
            <Button.Icon type="only">
              <ShoppingBag className="size-4" />
            </Button.Icon>
          </Button.Root>
        </Drawer.Trigger>
      </div>
      <Drawer.Portal>
        <Drawer.Overlay className="z-[11]" />
        <Drawer.Content
          withControler={false}
          className="z-20 grid w-full max-w-md [grid-template-rows:auto_1fr_auto] before:hidden dark:border-l"
          data-shade="950"
        >
          <div className="-mx-[--card-padding] flex justify-between border-b px-[--card-padding] pb-[22px]">
            <Drawer.Title>Shopping Bag</Drawer.Title>
            <Drawer.Close asChild className="-mt-0.5">
              <Button.Root variant="ghost" intent="gray" size="xs">
                <Button.Icon type="only">
                  <X />
                </Button.Icon>
              </Button.Root>
            </Drawer.Close>
          </div>
          {cartProducts.length == 0 && (
            <div className="py-12">
              <div className="mx-auto flex size-16 items-center justify-center rounded-full border border-dashed">
                <ShoppingBag className="mx-auto size-5 text-[--body-text-color]" />
              </div>
              <Title className="mt-4" as="div" weight="medium" size="lg" align="center">
                Your Bag is Empty
              </Title>
              <Text className="mx-auto mt-2 max-w-xs" align="center">
                Lerspiciatis dolorum, optio, at officia facere perferendis ut recusandae qui?
              </Text>
              <Button.Root href="/examples/ecommerce" variant="soft" size="sm" intent="gray" className="mx-auto w-fit">
                <Button.Label>Discover</Button.Label>
              </Button.Root>
            </div>
          )}
          <ScrollArea.Root className="-mr-4">
            <ScrollArea.Viewport className="relative w-full py-6">
              <div className="pr-4">
                {cartProducts.map((product, index) => (
                  <Item {...product} onDelete={() => handleDelete(product)} key={index} />
                ))}
              </div>
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar>
              <ScrollArea.Thumb />
            </ScrollArea.Scrollbar>
          </ScrollArea.Root>
          {cartProducts.length > 0 && (
            <div className="mt-auto border-t pt-6">
              <div className="space-y-1 divide-y *:py-2 first:*:mt-0 first:*:pt-0 last:*:pb-0">
                <div className="flex justify-between">
                  <Text as="div" size="sm" weight="medium">
                    Subtotal
                  </Text>
                  <Text as="span" size="sm">
                    $78
                  </Text>
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <Text as="div" weight="medium" size="sm">
                      Estimated Tax
                    </Text>
                    <Popover.Root>
                      <Popover.Trigger asChild>
                        <Button.Root data-rounded="full" size="xs" intent="gray" variant="ghost" aria-label="Tax Info">
                          <Button.Icon type="only">
                            <CircleHelp className="size-3" />
                          </Button.Icon>
                        </Button.Root>
                      </Popover.Trigger>
                      <Popover.Content className="w-64" mixed>
                        <Text size="sm">
                          The actual tax will be calculated based on the applicable state and local sales taxes when your order is shipped.
                        </Text>
                        <Link size="sm" href="#" intent="neutral" variant="underlined" className="mt-4 inline-block">
                          Learn More
                        </Link>
                      </Popover.Content>
                    </Popover.Root>
                  </div>
                  <Text as="span" size="sm">
                    -
                  </Text>
                </div>
                <div className="flex justify-between">
                  <Title as="div" weight="medium" className="text-sm">
                    Total
                  </Title>
                  <Text as="span" size="sm">
                    $708
                  </Text>
                </div>
              </div>

              <Button.Root className="mt-6 w-full" size="lg" intent="neutral" href="/examples/ecommerce/checkout">
                <Button.Label>Checkout</Button.Label>
              </Button.Root>
            </div>
          )}
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};
