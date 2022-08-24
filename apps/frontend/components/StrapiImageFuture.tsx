import { getStrapiMedia } from '../services/media';
import NextImage, { ImageProps } from 'next/future/image';
import { UploadFileEntityResponse } from '../generated/graphql';
import { PartialDeep } from 'type-fest';

export function StrapiImageFuture({
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

  const imagePropsWithDefaults = {
    ...imageProps,
  };

  const blurProps = placeholder
    ? { placeholder: 'blur', blurDataURL: placeholder }
    : null;

  return (
    <NextImage
      width={width}
      height={height}
      src={getStrapiMedia(image)}
      alt={alternativeText || ''}
      {...imagePropsWithDefaults}
      {...blurProps}
    />
  );
}
