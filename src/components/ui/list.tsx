import * as React from "react";

import { cn } from "@/lib/utils";

const List = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10",
      className
    )}
    {...props}
  >
    {children}
  </div>
));
List.displayName = "List";

export { List };
