import NextImage, { ImageProps as NextImageProps } from "next/image";
import { ImageFragment } from "src/types";
import type { SetOptional } from "type-fest";

interface ImageProps extends SetOptional<Omit<NextImageProps, "src">, "width" | "height" | "alt"> {
  image: ImageFragment;
}

export const Image = ({ image, ...props }: ImageProps) => {
  return (
    <NextImage
      {...(image.width && image.height && { width: image.width, height: image.height })}
      alt={image.alternativeText ?? ""}
      {...(image.placeholder && { placeholder: "blur", blurDataURL: image.placeholder })}
      {...props}
      src={`http://127.0.0.1:1337${image.url}`}
    />
  );
};
