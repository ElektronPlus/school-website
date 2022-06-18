import React from 'react';
import Card from './card';
import styles from './articles.module.css'

const Articles = ({ articles }) => {
  return (
    <section>
      <h2 className={styles.title}>Aktualności</h2>
      <ul className={styles.ul}>
        {articles.map((article) => {
          return (
            <Card
              article={article}
              key={`article-${article.attributes.slug}`}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Articles;
