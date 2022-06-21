import ReactMarkdown from 'react-markdown';
import Moment from 'react-moment';
import rehypeRaw from 'rehype-raw';

import Seo from '../../components/seo';

import { fetchAPI } from '../../services/api';

import { GetStaticPaths, GetStaticProps } from 'next';
import { ArticleEntity } from '../../generated/graphql';
import { CardMeta } from '../../components/Card/card';

function ArticleAuthor({ article }: { article: ArticleEntity }) {
  if (article.attributes.author.data === null) {
    console.debug(
      `Author not specificied for article with id: ${article.id}.`
    );

    return null;
  }

  return (
    <div>
      <span>By {article.attributes.author.data.attributes.name}</span>
    </div>
  );
}

export default function Article({ article }: { article: ArticleEntity }) {
  const seo = {
    metaTitle: article.attributes.title,
    metaDescription: article.attributes.content,
    shareImage: article.attributes.image,
    article: true,
  };

  return (
    <>
      <Seo seo={seo} />
      <div>
        <h1>{article.attributes.title}</h1>
      </div>
      <div>
        <div>
          <ReactMarkdown
            children={article.attributes.content}
            rehypePlugins={[rehypeRaw]}
          />
          <hr />
          <div>
            <div>
              <ArticleAuthor article={article} />
              <CardMeta article={article}></CardMeta>
            </div>
          </div>
        </div>
      </div>
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
    fallback: false,
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
