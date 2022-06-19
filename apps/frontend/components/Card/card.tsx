import React from 'react';
import Link from 'next/link';

import styles from './card.module.css';
import { ArticleEntity } from '../../generated/graphql';
import StrapiImage from '../strapiImage';
import rehypeRaw from 'rehype-raw';
import ReactMarkdown from 'react-markdown';
import Moment from '../../lib/moment'

function ArticleLink({
  children,
  article,
}: {
  children: React.ReactNode;
  article: ArticleEntity;
}) {
  const ARTICLE_PATH = 'artykul';

  return (
    <Link passHref href={`/${ARTICLE_PATH}/${article.attributes.slug}`}>
      <a>{children}</a>
    </Link>
  );
}

function Card({ article }: { article: ArticleEntity }) {
  return (
    <li className={styles.li} key={`article-${article.attributes.slug}`}>
      <article className={styles.article}>
        <figure className={styles.figure}>
          <ArticleLink article={article}>
            <StrapiImage
              image={article.attributes.image}
              imageProps={{ style: { borderRadius: '8px' } }}
            />
          </ArticleLink>
          <figcaption className={styles.figcaption}>
            <Moment format="MMMM Do YYYY, HH:mm">
              {article.attributes.publishedAt}
            </Moment>
            &nbsp;•&nbsp;
            <Link
              passHref
              href={`/kategoria/${article.attributes.category.data.attributes.slug}`}
            >
              <a>
                <span>{article.attributes.category.data.attributes.name}</span>
              </a>
            </Link>
            <ArticleLink article={article}>
              <h3>{article.attributes.title}</h3>
            </ArticleLink>
            <ReactMarkdown
              children={article.attributes.content.substring(0, 1000)}
              rehypePlugins={[rehypeRaw]}
            />
          </figcaption>
        </figure>
      </article>
    </li>
  );
}

export default Card;
