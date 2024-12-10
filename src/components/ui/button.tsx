import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-primary border border-transparent text-primary-foreground shadow hover:bg-transparent hover:border-primary hover:text-primary",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-transparent shadow-sm hover:border-secondary hover:text-secondary",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xl shadow-black/20 hover:bg-secondary/70 font-bold border border-transparent text-primary hover:bg-transparent hover:border-secondary hover:text-secondary",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        tertiary: "bg-tertiary text-primary-foreground shadow hover:bg-primary",
      },
      size: {
        default: "h-4 sm:h-9 px-2 sm:px-4 py-1 sm:py-2",
        sm: "h-4 sm:h-8 rounded sm:rounded-md px-1.5 sm:px-3 text-xs",
        lg: "h-7 sm:h-10 rounded sm:rounded-md px-4 sm:px-8",
        icon: "h-7 sm:h-10 w-7 sm:w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
