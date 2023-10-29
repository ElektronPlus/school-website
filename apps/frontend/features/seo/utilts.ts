import { templateConfig } from "site.config";
import { MAXIMUM_META_TITLE_LENGTH } from "features/seo/constants";


export const trimTitle = (title: string) => {
  const lengthWithShort = (title?.length ?? 0) + templateConfig.title.short.length;
  const lengthWithLong = (title?.length ?? 0) + templateConfig.title.long.length;

  if (lengthWithLong <= MAXIMUM_META_TITLE_LENGTH) {
    return `${title} | ${templateConfig.title.long}`;
  } else if (lengthWithShort <= MAXIMUM_META_TITLE_LENGTH) {
    return `${title} | ${templateConfig.title.short}`;
  } else {
    return title;
  }
};