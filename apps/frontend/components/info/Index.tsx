import { PageEntity } from 'generated/graphql';
import { css } from '@emotion/react';
import { Level } from 'react-accessible-headings';
import styled from '@emotion/styled';
import { PartialDeep } from 'type-fest';
import { InfoContent } from 'components/info/Content';
import { InfoTitle } from './Title';
import { InfoDetails } from './Details';

function Info({ info }: { info: PartialDeep<PageEntity> }) {
  const publishedAt = info.attributes.publishedAt;

  const { title, slug, content } = info.attributes;

  const CenterIfSingleArticlePage = styled.div(
        css`
          text-align: center;
          margin: auto;
          width: 75%;
        `
      )

  const ShadowAndBorderIfNotSingleArticlePage = styled.div`
        width: 100%;
      `

  const NarrowWrapperIfSingleArticlePage = styled.div(`max-width: 900px; margin: auto;`)

  return (
    <li
      css={css`
        list-style-type: none;
      `}
      key={`article-${info.attributes.slug}`}
    >
      <article>
        <Level>
          <div
            css={css`
              margin: auto;
              padding: 16px;
            `}
          >
            <ShadowAndBorderIfNotSingleArticlePage>
              <div
                css={css`
                  padding: 24px;
                `}
              >
                <NarrowWrapperIfSingleArticlePage>
                  <CenterIfSingleArticlePage>
                    <InfoDetails
                      publishedAt={publishedAt}
                    />
                    <InfoTitle
                      title={title}
                      slug={slug}
                    />
                  </CenterIfSingleArticlePage>

                  <InfoContent
                    content={content}
                    slug={slug}
                  />
                </NarrowWrapperIfSingleArticlePage>
              </div>
            </ShadowAndBorderIfNotSingleArticlePage>
          </div>
        </Level>
      </article>
    </li>
  );
}

export function BulletPoint() {
  return <span>&nbsp;&bull;&nbsp;</span>;
}

export default Info;
