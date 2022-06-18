import React from 'react';
import { GetArticlesQuery, GetCategoriesBySlugQuery } from '../../generated/graphql';
import Card from '../Card/card';
import styles from './articles.module.css';

type Articles = GetArticlesQuery['articles'] | GetCategoriesBySlugQuery['categories']['data']['0']['attributes']['articles'];

function Articles({ articles }: { articles: Articles }) {
  return (
    <section>
      <h2 className={styles.title}>Aktualności</h2>
      <ul className={styles.ul}>
        {articles.data.map((article) => {
          return (
            <Card
              // @ts-expect-error
              article={article}
              key={`article-${article.attributes.slug}`}
            />
          );
        })}
      </ul>
    </section>
  );
}

export default Articles;
