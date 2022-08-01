import {
  GetArticlesQuery,
  GetCategoriesBySlugQuery,
} from '../generated/graphql';

export type Articles =
  | GetArticlesQuery['articles']
  | GetCategoriesBySlugQuery['categories']['data']['0']['attributes']['articles'];
