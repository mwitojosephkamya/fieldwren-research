/* eslint-disable @next/next/no-img-element */
import { photoUrl } from "@/config/images";

export function Photo({
  image,
  width = 1200,
  className = "",
  eager = false,
}: {
  image: { id: number; alt: string };
  width?: number;
  className?: string;
  eager?: boolean;
}) {
  return (
    <img
      src={photoUrl(image.id, width)}
      alt={image.alt}
      loading={eager ? "eager" : "lazy"}
      className={`bg-sky object-cover ${className}`}
    />
  );
}
