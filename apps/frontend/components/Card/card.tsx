import React from 'react';
import Link from 'next/link';
import NextImage from '../strapiImage';
import Moment from 'react-moment';
import 'moment-timezone';
import styles from './card.module.css';
import { ArticleEntity } from '../../generated/graphql';

function Card({ article }: { article: ArticleEntity }) {
  // article by default
  const ARTICLE_PATH = 'artykul';
  const CATEGORY_PATH = 'kategoria';

  return (
    <li className={styles.li} key={`article-${article.attributes.slug}`}>
      <article>
        <Link passHref href={`/${ARTICLE_PATH}/${article.attributes.slug}`}>
          <a>
            <NextImage image={article.attributes.image} />
              <Moment tz="Poland" format="MMMM Do YYYY, HH:mm">
                {article.attributes.publishedAt}
              </Moment>
              &nbsp;•&nbsp;
              <span>{article.attributes.category.data.attributes.name}</span>
            <h3>{article.attributes.title}</h3>
            <p>{article.attributes.content}</p>
          </a>
        </Link>
      </article>
    </li>
  );
}

export default Card;
