const ARTICLES_PATH = 'blog';
const CATEGORY_PATH = 'tag';

export function getArticlePathBySlug(slug: string) {
  return `/${ARTICLES_PATH}/${slug}`;
}

export function getCategoryPathBySlug(slug: string) {
  return `/${CATEGORY_PATH}/${slug}`;
}
