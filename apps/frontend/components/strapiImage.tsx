import { getStrapiMedia } from "../services/media";
import NextImage from "next/image";

export default function StrapiImage({ image }) {
  const { alternativeText, width, height } = image.data.attributes;

  return (
    <NextImage
      layout="responsive"
      width={width}
      height={height}
      objectFit="contain"
      src={getStrapiMedia(image)}
      alt={alternativeText || ""} />
  );
}