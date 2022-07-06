import {
  GetArticlesQuery,
  GetCategoriesBySlugQuery,
} from '../../generated/graphql';
import Article from '.';
import styles from './grid.module.css';
import Masonry from 'react-masonry-css';
import { css } from '@emotion/react';
import { Level, H } from 'react-accessible-headings';

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
      <Level>
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
                article={article}
                isSingleArticlePage={false}
                key={`article-${article.attributes.slug}`}
              />
            );
          })}
        </Masonry>
      </ul>
      </Level>
    </section>
  );
}

export default ArticlesGrid;
