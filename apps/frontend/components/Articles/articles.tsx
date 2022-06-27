import React from 'react';
import {
  GetArticlesQuery,
  GetCategoriesBySlugQuery,
} from '../../generated/graphql';
import Card from '../Card/card';
import styles from './articles.module.css';
import Masonry from 'react-masonry-css';
import { Heading } from '@chakra-ui/react';
import { css } from '@emotion/react';

type Articles =
  | GetArticlesQuery['articles']
  | GetCategoriesBySlugQuery['categories']['data']['0']['attributes']['articles'];

function Articles({
  articles,
  sectionHeader,
}: {
  articles: Articles;
  sectionHeader: string;
}) {
  return (
    <section className={styles.section}>
      <div
        css={css`
          text-align: center;
          font-size: 2em;
        `}
      >
        <h2>{sectionHeader}</h2>
      </div>
      <ul className={styles.ul}>
        <Masonry
          breakpointCols={{
            default: 2,
            1000: 1,
          }}
          className={styles.articlesGrid}
          columnClassName={styles.articlesColumn}
        >
          {articles.data.map((article) => {
            return (
              <Card
                // @ts-expect-error
                article={article}
                isThumbnail={true}
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
