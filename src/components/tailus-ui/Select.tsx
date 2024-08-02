import React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { cloneElement } from "@lib/utils.ts";

import {
  caption,
  select,
  trigger,
  type SelectProps,
  type TriggerProps,
  type SeparatorProps,
} from "@tailus/themer";

import { twMerge } from "tailwind-merge";
import { ChevronDown, ChevronUp } from "lucide-react";

interface SelectIconProps {
  className?: string;
  children: React.ReactNode;
  size?: TriggerProps["size"];
}

const SelectGroup = SelectPrimitive.Group;

const SelectContext = React.createContext<SelectProps>({});
const { button, separator, itemIndicator, label } = select.soft();

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, children, ...props }, forwardedRef) => (
  <SelectPrimitive.ScrollUpButton
    {...props}
    ref={forwardedRef}
    className={button({ className })}
  >
    {children || <ChevronUp className="size-3" />}
  </SelectPrimitive.ScrollUpButton>
));
SelectScrollUpButton.displayName = "SelectScrollUpButton";

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, children, ...props }, forwardedRef) => (
  <SelectPrimitive.ScrollDownButton
    {...props}
    ref={forwardedRef}
    className={button({ className })}
  >
    {children || <ChevronDown className="size-3" />}
  </SelectPrimitive.ScrollDownButton>
));
SelectScrollDownButton.displayName = "SelectScrollDownButton";

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> & TriggerProps
>(
  (
    { size = "md", variant = "mixed", className, children, ...props },
    forwardedRef,
  ) => {
    const { parent } = trigger();
    return (
      <SelectPrimitive.Trigger
        {...props}
        ref={forwardedRef}
        className={parent({ size, variant, className })}
      >
        {children}
      </SelectPrimitive.Trigger>
    );
  },
);
SelectTrigger.displayName = "SelectTrigger";

const SelectTriggerIcon = ({ className, size, children }: SelectIconProps) => {
  const { icon } = trigger();
  return cloneElement(
    children as React.ReactElement,
    icon({ size, className }),
  );
};

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content> & SelectProps
>(
  (
    {
      className,
      variant = "solid",
      intent = "primary",
      mixed = false,
      fancy = false,
      children,
      ...props
    },
    forwardedRef,
  ) => {
    const {
      variant: contextVariant,
      intent: contextIntent,
      fancy: contextFancy,
      mixed: contextMixed,
    } = React.useContext(SelectContext);

    variant = variant || contextVariant || "solid";
    intent = intent || contextIntent || "primary";
    fancy = fancy || contextFancy || false;
    mixed = mixed || contextMixed || false;

    if (fancy && mixed) {
      throw new Error("The fancy and mixed props cannot be used together.");
    }

    const { content } = select[variant]();

    return (
      <SelectContext.Provider value={{ variant, fancy, mixed, intent }}>
        <SelectPrimitive.Content
          {...props}
          ref={forwardedRef}
          className={content({ mixed, fancy, intent, className })}
        >
          {children}
        </SelectPrimitive.Content>
      </SelectContext.Provider>
    );
  },
);
SelectContent.displayName = "SelectContent";

const SelectItemIndicator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ItemIndicator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ItemIndicator>
>(({ className, ...props }, forwardedRef) => (
  <SelectPrimitive.ItemIndicator
    {...props}
    ref={forwardedRef}
    className={itemIndicator({ className })}
  />
));
SelectItemIndicator.displayName = "SelectItemIndicator";

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> & SelectProps
>(({ className, variant, children, ...props }, forwardedRef) => {
  const { variant: contextVariant, intent } = React.useContext(SelectContext);

  variant = contextVariant || "solid";

  const { item } = select[variant]();

  return (
    <SelectPrimitive.Item
      {...props}
      ref={forwardedRef}
      className={item({ intent, className })}
    >
      {children}
    </SelectPrimitive.Item>
  );
});
SelectItem.displayName = "SelectItem";

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, forwardedRef) => (
  <SelectPrimitive.Label
    {...props}
    ref={forwardedRef}
    className={twMerge(caption(), label(), className)}
  />
));
SelectLabel.displayName = "SelectLabel";

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator> &
    Pick<SeparatorProps, "fancy" | "dashed">
>(({ className, fancy = false, dashed = false, ...props }, forwardedRef) => {
  const { fancy: contextFancy } = React.useContext(SelectContext);

  fancy = fancy || contextFancy || false;
  return (
    <SelectPrimitive.Separator
      {...props}
      ref={forwardedRef}
      className={separator({ fancy, dashed, className })}
    />
  );
});
SelectSeparator.displayName = "SelectSeparator";

const Select = {
  Root: SelectPrimitive.Root,
  Trigger: SelectTrigger,
  Content: SelectContent,
  Item: SelectItem,
  Group: SelectGroup,
  Separator: SelectSeparator,
  Portal: SelectPrimitive.Portal,
  Value: SelectPrimitive.Value,
  Icon: SelectPrimitive.Icon,
  ItemIndicator: SelectItemIndicator,
  ScrollUpButton: SelectScrollUpButton,
  ScrollDownButton: SelectScrollDownButton,
  Label: SelectLabel,
  Viewport: SelectPrimitive.Viewport,
  ItemText: SelectPrimitive.ItemText,
  TriggerIcon: SelectTriggerIcon,
};

export default Select;
