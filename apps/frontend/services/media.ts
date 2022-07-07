import { getStrapiURL } from './api';

export function getStrapiMedia(media) {
  if (media === undefined || media.data === null) {
    return null
  }

  const { url } = media.data.attributes;
  const imageUrl = url.startsWith('/') ? getStrapiURL(url) : url;

  // adding updatedAt to the image object will allow us to cache the image and revalidate it only when it's updated
  return `${imageUrl}?updatedAt=${media.data.attributes.updatedAt}`;
}