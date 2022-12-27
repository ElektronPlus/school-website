import { ImageFragment } from "src/types";
import NextImage, { ImageProps as NextImageProps } from "next/image";

interface ImageProps extends Omit<NextImageProps, "src" | "alt" | "width" | "height">{
  image: ImageFragment;
}

export const Image = ({ image, ...props }: ImageProps) => {
  return (
    <NextImage
      {...props}
      src={`http://127.0.0.1:1337${image.url}`}
      alt={image.alternativeText ?? ""}
      {...(image.width && image.height && { width: image.width, height: image.height })}
      {...(image.placeholder && { placeholder: "blur", blurDataURL: image.placeholder })}
    />
  );
};
