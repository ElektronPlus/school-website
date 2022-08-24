import NextImage, { ImageProps } from 'next/image';
import { PartialDeep } from 'type-fest';
import { UploadFileEntityResponse } from '../generated/graphql';
import { getStrapiMedia } from '../services/media';

export function StrapiImage({
  image,
  imageProps,
}: {
  image: PartialDeep<UploadFileEntityResponse>;
  imageProps?: PartialDeep<ImageProps>;
}) {
  if (image.data === null) {
    console.debug(
      'No image data for item. This is correct for optional fields!'
    );

    return null;
  }

  const { alternativeText, width, height, placeholder } = image.data.attributes;

  const defaultImageProps: PartialDeep<ImageProps> = {
    layout: 'responsive',
    objectFit: 'contain',
  };

  const imagePropsWithDefaults = {
    ...defaultImageProps,
    ...imageProps,
  };

  const blurProps = placeholder
    ? { placeholder: 'blur', blurDataURL: placeholder }
    : null;

  // according to the next.js docs, layout fill shouldn't have size props
  const sizeProps =
    imagePropsWithDefaults.layout === 'fill' ? null : { width, height };

  return (
    <NextImage
      {...sizeProps}
      src={getStrapiMedia(image)}
      alt={alternativeText || ''}
      {...imagePropsWithDefaults}
      {...blurProps}
    />
  );
}
