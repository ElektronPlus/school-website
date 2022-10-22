import { META_DESCRIPTION_MAX_LENGTH } from 'constants/index';
import parse from 'node-html-parser';

import { truncate } from 'utils';

export const getMetaDescription = (content: string) => {
  return truncate(parse(content).textContent, META_DESCRIPTION_MAX_LENGTH);
};
