import * as PopoverPrimitive from "@radix-ui/react-popover";
import React from "react";
import { popover, type PopoverProps } from "@tailus/themer";

const PopoverRoot = PopoverPrimitive.Root;
const PopoverTrigger = PopoverPrimitive.Trigger;
const PopoverAnchor = PopoverPrimitive.Anchor;
const PopoverPortal = PopoverPrimitive.Portal;

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> & PopoverProps
>(({ className, fancy, mixed, ...props }, forwardedRef) => {
  const { content } = popover();

  if (fancy && mixed) {
    throw new Error("The fancy and mixed props cannot be used together.");
  }

  return (
    <PopoverPrimitive.Content
      {...props}
      ref={forwardedRef}
      className={content({ fancy, mixed, className })}
    />
  );
});
PopoverContent.displayName = "PopoverContent";

const PopoverClose = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Close>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Close>
>(({ className, ...props }, forwardedRef) => {
  const { close } = popover();

  return (
    <PopoverPrimitive.Close
      {...props}
      ref={forwardedRef}
      className={close({ className })}
    />
  );
});
PopoverClose.displayName = "PopoverClose";

const PopoverArrow = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Arrow>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Arrow>
>(({ className, ...props }, forwardedRef) => {
  const { arrow } = popover();
  return (
    <PopoverPrimitive.Arrow
      {...props}
      ref={forwardedRef}
      className={arrow({ className })}
    />
  );
});
PopoverArrow.displayName = "PopoverArrow";

export {
  PopoverRoot,
  PopoverTrigger,
  PopoverAnchor,
  PopoverPortal,
  PopoverContent,
  PopoverClose,
  PopoverArrow,
};

const Popover = {
  Root: PopoverRoot,
  Trigger: PopoverTrigger,
  Anchor: PopoverAnchor,
  Portal: PopoverPortal,
  Content: PopoverContent,
  Close: PopoverClose,
  Arrow: PopoverArrow,
};

export default Popover;
