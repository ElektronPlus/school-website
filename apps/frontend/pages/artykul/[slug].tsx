import Seo from '../../components/seo';

import { fetchAPI } from '../../services/api';

import { GetStaticPaths, GetStaticProps } from 'next';
import { ArticleEntity } from '../../generated/graphql';
import Article from '../../components/article/article';

export default function ArticlePage({ article }: { article: ArticleEntity }) {
  const seo = {
    metaTitle: article.attributes.title,
    metaDescription: article.attributes.content,
    shareImage: article.attributes.image,
    article: true,
  };

  return (
    <>
      <Seo seo={seo} />
      <Article article={article} isSingleArticlePage={true}/>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const articlesRes = await fetchAPI('/articles', { fields: ['slug'] });

  return {
    paths: articlesRes.data.map((article) => ({
      params: {
        slug: article.attributes.slug,
      },
    })),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const articlesRes = await fetchAPI('/articles', {
    filters: {
      slug: params.slug,
    },
    populate: ['image', 'category', 'author.picture'],
  });
  const categoriesRes = await fetchAPI('/categories');

  return {
    props: { article: articlesRes.data[0], categories: categoriesRes },
    revalidate: 1,
  };
};
