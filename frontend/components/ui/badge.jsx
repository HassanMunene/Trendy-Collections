import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva  } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border px-2.5 py-1 text-xs font-semibold transition-colors w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none overflow-hidden",
  {
    variants: {
      variant: {
        // Solid variants
        primary: "bg-blue-600 text-white border-blue-700 hover:bg-blue-700",
        secondary: "bg-gray-600 text-white border-gray-700 hover:bg-gray-700",
        success: "bg-green-600 text-white border-green-700 hover:bg-green-700",
        warning: "bg-yellow-500 text-gray-900 border-yellow-600 hover:bg-yellow-600",
        destructive: "bg-red-600 text-white border-red-700 hover:bg-red-700",
        info: "bg-blue-500 text-white border-blue-600 hover:bg-blue-600",

        // Subtle variants
        subtle: "bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200",
        subtlePrimary: "bg-blue-50 text-blue-800 border-blue-100 hover:bg-blue-100",
        subtleSuccess: "bg-green-50 text-green-800 border-green-100 hover:bg-green-100",
        subtleWarning: "bg-yellow-50 text-yellow-800 border-yellow-100 hover:bg-yellow-100",
        subtleDestructive: "bg-red-50 text-red-800 border-red-100 hover:bg-red-100",

        // Outline variants
        outline: "bg-transparent text-gray-700 border-gray-300 hover:bg-gray-50",
        outlinePrimary: "bg-transparent text-blue-700 border-blue-300 hover:bg-blue-50",
        outlineSuccess: "bg-transparent text-green-700 border-green-300 hover:bg-green-50",
        outlineWarning: "bg-transparent text-yellow-700 border-yellow-300 hover:bg-yellow-50",
        outlineDestructive: "bg-transparent text-red-700 border-red-300 hover:bg-red-50",
      },
      size: {
        sm: "text-xs px-2 py-0.5",
        md: "text-sm px-2.5 py-1",
        lg: "text-base px-3 py-1.5",
      },
      rounded: {
        full: "rounded-full",
        md: "rounded-md",
        lg: "rounded-lg",
      },
      shadow: {
        none: "shadow-none",
        sm: "shadow-sm",
        md: "shadow",
      }
    },
    defaultVariants: {
      variant: "subtle",
      size: "md",
      rounded: "full",
      shadow: "none",
    },
  }
)

/**
 * @typedef {Object} BadgeProps
 * @property {string} [variant]
 * @property {string} [size]
 * @property {string} [rounded]
 * @property {string} [shadow]
 * @property {boolean} [asChild]
 * @property {string} [className]
 * @property {React.ReactNode} [children]
 * @property {React.Ref<HTMLSpanElement>} [ref]
 */

const Badge = React.forwardRef(
  ({ className, variant, size, rounded, shadow, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "span"
    return (
      <Comp
        className={cn(badgeVariants({ variant, size, rounded, shadow }), className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Badge.displayName = "Badge"

export { Badge, badgeVariants }
