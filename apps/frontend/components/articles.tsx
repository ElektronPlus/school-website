import React from 'react';
import Card from './card';

const Articles = ({ articles }) => {
  return (
    <section>
      <h2>Aktualności</h2>
      <ul>
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
