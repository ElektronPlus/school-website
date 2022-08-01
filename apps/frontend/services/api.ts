import qs from 'qs';

export function getStrapiURL(path = '') {
  return `https://${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || 'https://strapi.elektronplus.pl'
  }${path}`;
}

export async function fetchAPI(
  path: string,
  urlParamsObject = {},
  options = {}
) {
  const mergedOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  const queryString = qs.stringify(urlParamsObject);
  const requestUrl = `${getStrapiURL(
    `/api${path}${queryString ? `?${queryString}` : ''}`
  )}`;

  const response = await fetch(requestUrl, mergedOptions);

  if (!response.ok) {
    console.error(response.statusText);
    console.log(requestUrl);
    throw new Error(`An error occured please try again`);
  }
  const data = await response.json();
  return data;
}
