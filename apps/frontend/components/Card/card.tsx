import React from 'react';
import Link from 'next/link';

import styles from './card.module.css';
import { Article, ArticleEntity } from '../../generated/graphql';
import StrapiImage from '../strapiImage';
import rehypeRaw from 'rehype-raw';
import ReactMarkdown from 'react-markdown';
import Moment from '../../lib/moment';

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

function Category({ article }: { article: ArticleEntity }) {
  if (article.attributes.category.data === null) {
    console.debug(
      'No image data for item. This is correct for optional fields!'
    );

    return null;
  }

  return (
    <Link
      passHref
      href={`/kategoria/${article.attributes.category.data.attributes.slug}`}
    >
      <a>
        <span>{article.attributes.category.data.attributes.name}</span>
      </a>
    </Link>
  );
}

function BulletPoint() {
  return <span>&nbsp;&bull;&nbsp;</span>;
}

function CardContent({ article }: { article: ArticleEntity }) {
  const MAX_CHARACTERS = 1000;
  const content = article.attributes.content.substring(0, MAX_CHARACTERS);

  return <ReactMarkdown children={content} rehypePlugins={[rehypeRaw]} />;
}

function CardTitle({ article }: { article: ArticleEntity }) {
  return (
    <ArticleLink article={article}>
      <h3>{article.attributes.title}</h3>
    </ArticleLink>
  );
}

function CardDate({ article }: { article: ArticleEntity }) {
  const DATE_FORMAT = "Do MMMM YYYY, HH:mm"

  return (
    <Moment format={DATE_FORMAT}>
    {article.attributes.publishedAt}
  </Moment>
  )
}

export function CardMeta({ article }: { article: ArticleEntity }) {
  return (
    <div>
      <CardDate article={article}/>
    {article.attributes.category.data !== null &&
      <BulletPoint />
    }
    </div>
  )
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
            <CardMeta article={article}/>
            <Category article={article} />
            <CardTitle article={article} />
            <CardContent article={article} />
          </figcaption>
        </figure>
      </article>
    </li>
  );
}

export default Card;
