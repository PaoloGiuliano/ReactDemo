// Fancybox.tsx
import React, { useRef, useEffect } from "react";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

interface Image {
  src: string;
  caption?: string;
}

interface FancyboxProps {
  images: Image[];
  delegate?: string;
  options?: Record<string, any>;
  width?: number;
  height?: number;
}

const Fancybox: React.FC<FancyboxProps> = ({
  images,
  delegate = "[data-fancybox]",
  options = {},
  width = 200,
  height = 150,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    NativeFancybox.bind(container, delegate, options);

    return () => {
      NativeFancybox.unbind(container);
      NativeFancybox.close();
    };
  }, [delegate, options]);

  return (
    <div ref={containerRef} className="grid grid-cols-4 gap-4">
      {images.map((image, index) => (
        <a
          key={index}
          data-fancybox="gallery"
          href={image.src}
          data-caption={image.caption}
        >
          <img
            src={image.src}
            alt={image.caption}
            width={width}
            height={height}
            className="h-full w-full object-cover"
          />
        </a>
      ))}
    </div>
  );
};

export default Fancybox;
