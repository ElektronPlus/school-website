import { DEFAULT_TITLE_SHORT, DEFAULT_TITLE_LONG, MAXIMUM_META_TITLE_LENGTH } from "features/seo/constants";

export const trimTitle = (title: string) => {
  const lengthWithShort = (title?.length ?? 0) + DEFAULT_TITLE_SHORT.length;
  const lengthWithLong = (title?.length ?? 0) + DEFAULT_TITLE_LONG.length;

  if (lengthWithLong <= MAXIMUM_META_TITLE_LENGTH) {
    return `${title} | ${DEFAULT_TITLE_LONG}`;
  } else if (lengthWithShort <= MAXIMUM_META_TITLE_LENGTH) {
    return `${title} | ${DEFAULT_TITLE_SHORT}`;
  } else {
    return title;
  }
};