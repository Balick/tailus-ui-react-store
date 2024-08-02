import React from "react";
import { form, type InputProps as InputVariants } from "@tailus/themer";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    InputVariants {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { variant = "mixed", fancy = false, className, size = "md", ...props },
    forwardedRef,
  ) => {
    const { input } = form();

    if ((variant === "bottomOutlined" || variant === "plain") && fancy) {
      throw Error(
        "Fancy is not supported with the bottomOutlined or plain variant !",
      );
    }

    return (
      <input
        ref={forwardedRef}
        className={input({ variant, fancy, size, className })}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";
