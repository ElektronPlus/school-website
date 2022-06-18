import React from 'react';
import Link from 'next/link';
import NextImage from '../strapiImage';
import Moment from 'react-moment';
import styles from './card.module.css';

const Card = ({ article }) => {
  // article by default
  const ARTICLE_PATH = 'artykul';
  const CATEGORY_PATH = 'kategoria';

  return (
    <li className={styles.li} key={`article-${article.attributes.slug}`}>
      <article>
        <Link href={`/${ARTICLE_PATH}/${article.attributes.slug}`}>
          <a>
            <figure>
              <NextImage image={article.attributes.image} />
              <span>
                <Moment format="MMMM Do YYYY, HH:mm">
                  {article.attributes.publishedAt}
                </Moment>
                &nbsp;•&nbsp;
                <Link
                  href={`/${CATEGORY_PATH}/${article.attributes.category.data.attributes.slug}`}
                >
                  <a>{article.attributes.category.data.attributes.name}</a>
                </Link>
              </span>
              <figcaption>
                <h3>{article.attributes.title}</h3>
              </figcaption>
            </figure>
          </a>
        </Link>
      </article>
    </li>
  );
};

export default Card;
