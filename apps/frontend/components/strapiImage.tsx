import { getStrapiMedia } from '../services/media';
import NextImage, { ImageProps } from 'next/image';
import { UploadFileEntityResponse } from '../generated/graphql';

export default function StrapiImage({ image, imageProps }: { image: UploadFileEntityResponse, imageProps?: Partial<ImageProps> }) {
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
