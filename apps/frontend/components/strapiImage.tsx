import { getStrapiMedia } from '../services/media';
import NextImage, { ImageProps } from 'next/image';
import { UploadFileEntityResponse } from '../generated/graphql';

export default function StrapiImage({ image, imageProps }: { image: UploadFileEntityResponse, imageProps?: Partial<ImageProps> }) {
  if (image.data === null) {
    console.debug("No image data for item. This is correct for optional fields!")

    return null
  }

  const { alternativeText, width, height } = image.data.attributes;

  const defaultImageProps: Partial<ImageProps> = {
    layout: "responsive",
    objectFit: "contain",
  }

  const imagePropsWithDefaults = {
    ...defaultImageProps,
    ...imageProps
  }

  return (
    <NextImage
      width={width}
      height={height}
      src={getStrapiMedia(image)}
      alt={alternativeText || ''}
      {...imagePropsWithDefaults}
    />
  );
}
