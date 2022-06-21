import React from 'react';
import { GetArticlesQuery, GetCategoriesBySlugQuery } from '../../generated/graphql';
import Card from '../Card/card';
import styles from './articles.module.css';
import Masonry from 'react-masonry-css';

type Articles = GetArticlesQuery['articles'] | GetCategoriesBySlugQuery['categories']['data']['0']['attributes']['articles'];

function Articles({ articles }: { articles: Articles }) {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Aktualności</h2>
      <ul className={styles.ul}>
      <Masonry
          breakpointCols={{
            default: 2,
            1000: 1,
          }}
          className={styles.articlesGrid}
          columnClassName={styles.articlesColumn}>
          {articles.data.map((article) => {
          return (
            <Card
              // @ts-expect-error
              article={article}
              key={`article-${article.attributes.slug}`}
            />
          );
        })}
      </Masonry>
      </ul>
    </section>
  );
}

export default Articles;
