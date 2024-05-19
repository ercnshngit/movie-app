import * as React from "react";

import { cn } from "@/lib/utils";

const Breadcrumb = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("bg-foreground/85 py-4 text-background", className)}
    {...props}
  >
    <div className="container mx-auto">{children}</div>
  </div>
));
Breadcrumb.displayName = "Breadcrumb";

export { Breadcrumb };
