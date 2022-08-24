import { css } from '@emotion/react';
import { H, Level } from 'react-accessible-headings';
import Masonry from 'react-masonry-css';
import {
  GetArticlesQuery,
  GetCategoriesBySlugQuery,
} from '../../generated/graphql';
import styles from './grid.module.css';
import Article from './Index';

type Articles =
  | GetArticlesQuery['articles']
  | GetCategoriesBySlugQuery['categories']['data']['0']['attributes']['articles'];

function ArticlesGrid({
  articles,
  sectionHeader,
  readMore,
  cardMaxCharacters,
}: {
  articles: Articles;
  sectionHeader: string;
  readMore: string;
  cardMaxCharacters: number;
}) {
  return (
    <section>
      <Level>
        <div
          css={css`
            text-align: center;
            font-size: 2.75rem;
            font-weight: 700;
            padding: 16px;
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
            {articles.data.map((article, index) => {
              // optimizing largest contentful paint https://web.dev/optimize-lcp/
              const isPriority = index <= 1;

              return (
                <Article
                  article={article}
                  isPriority={isPriority}
                  isSingleArticlePage={false}
                  key={`article-${article.attributes.slug}`}
                  readMore={readMore}
                  cardMaxCharacters={cardMaxCharacters}
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
