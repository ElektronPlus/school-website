const ARTICLES_PATH = 'artykul'

export function getArticlePathBySlug(slug: string) {
    return `/${ARTICLES_PATH}/${slug}`;
}