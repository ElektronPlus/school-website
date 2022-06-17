import React from 'react';
import Card from './card';

const Articles = ({ articles }) => {
  return (
    <div>
      <div>
        <div>
          <div>
            {articles.map((article) => {
              return (
                <Card
                  article={article}
                  key={`article-${article.attributes.slug}`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
