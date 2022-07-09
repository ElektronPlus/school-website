const ARTICLES_PATH = 'artykul'
const CATEGORY_PATH = 'kategoria'


export function getArticlePathBySlug(slug: string) {
    return `/${ARTICLES_PATH}/${slug}`;
}

export function getCategoryPathBySlug(slug: string) {
    return `/${CATEGORY_PATH}/${slug}`;
}