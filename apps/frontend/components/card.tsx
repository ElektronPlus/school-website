import React from 'react';
import Link from 'next/link';
import NextImage from './strapiImage';

const Card = ({ article }) => {
  // article by default
  const ARTICLE_PATH = 'artykul';

  return (
    <Link href={`/${ARTICLE_PATH}/${article.attributes.slug}`}>
      <a>
        <div>
          <div>
            <NextImage image={article.attributes.image} />
          </div>
          <div>
            <p>{article.attributes.category.data.attributes.name}</p>
            <p>{article.attributes.title}</p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Card;
