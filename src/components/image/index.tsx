import * as React from "react";

import { cn } from "@/lib/utils";

export interface ImageProps
  extends React.InputHTMLAttributes<HTMLImageElement> {
  fallbackSrc: string;
}

const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ className, src, fallbackSrc, ...props }, ref) => {
    const [currentSrc, setCurrentSrc] = React.useState(src);

    const handleError = () => {
      // On error, set the source to the fallback image
      setCurrentSrc(fallbackSrc);
    };
    return (
      <img
        src={currentSrc}
        className={cn("w-full h-full object-cover", className)}
        onError={handleError}
        ref={ref}
        {...props}
      />
    );
  }
);
Image.displayName = "Image";

export { Image };
