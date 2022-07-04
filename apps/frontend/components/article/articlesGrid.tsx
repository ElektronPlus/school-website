import React from 'react';
import {
  GetArticlesQuery,
  GetCategoriesBySlugQuery,
} from '../../generated/graphql';
import Article from './article';
import styles from './articlesGrid.module.css';
import Masonry from 'react-masonry-css';
import { css } from '@emotion/react';
import { H } from 'react-headings';

type Articles =
  | GetArticlesQuery['articles']
  | GetCategoriesBySlugQuery['categories']['data']['0']['attributes']['articles'];

function ArticlesGrid({
  articles,
  sectionHeader = 'Co nowego w Elektronie?',
}: {
  articles: Articles;
  sectionHeader: string;
}) {
  return (
    <section>
      <div
        css={css`
          text-align: center;
          font-size: 2em;
        `}
      >
        <H>{sectionHeader}</H>
      </div>
      <ul
        css={css`
          padding: 0;
        `}
      >
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
              <Article
                // @ts-expect-error
                article={article}
                isSingleArticlePage={false}
                key={`article-${article.attributes.slug}`}
              />
            );
          })}
        </Masonry>
      </ul>
    </section>
  );
}

export default ArticlesGrid;
