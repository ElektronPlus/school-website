import Moment from 'react-moment';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

import Seo from '../../components/seo';

import { fetchAPI } from '../../services/api';
import { getStrapiMedia } from '../../services/media';

import { GetStaticPaths, GetStaticProps } from 'next';

export default function Article({ article }) {
  const imageUrl = getStrapiMedia(article.attributes.image);

  const seo = {
    metaTitle: article.attributes.title,
    metaDescription: article.attributes.description,
    shareImage: article.attributes.image,
    article: true,
  };

  return (
    <>
      <Seo seo={seo} />
      <div data-src={imageUrl} data-srcset={imageUrl}>
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
              <p>By {article.attributes.author.data.attributes.name}</p>
              <p>
                <Moment format="MMM Do YYYY">
                  {article.attributes.published_at}
                </Moment>
              </p>
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
