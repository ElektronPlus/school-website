import { css } from '@emotion/react';
import { H, Level } from 'react-accessible-headings';
import Avatar from 'react-avatar';

function AuthorDescription({ content }: { content: string }) {
  if (content !== null) {
    return (
      <span
        css={css`
          letter-spacing: 1.1;
          font-size: 0.85rem;
          color: #718096;
          text-transform: uppercase;
        `}
      >
        {content}
      </span>
    );
  }

  return null;
}

function AuthorName({ content }: { content: string }) {
  if (content !== null) {
    return (
      <>
        <H
          css={css`
            font-size: 1.25rem;
          `}
        >
          {content}
        </H>
      </>
    );
  }

  return null;
}

export function ArticleAuthorCard({
  authorName,
  authorDescription,
  authorPictureUrl,
}: {
  authorName: string;
  authorDescription?: string;
  authorPictureUrl?: string;
}) {
  return (
    <div
      css={css`
        padding-top: 32px;
        margin: auto;
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 8px;
        border-top: 1px solid #e5e5e5;
        margin-top: 32px;
        width: 100%;
      `}
    >
      <Level>
        <div>
          {authorPictureUrl !== null && (
            <Avatar
              alt=""
              title=""
              src={authorPictureUrl}
              name={authorName}
              size="48px"
              round
            />
          )}
        </div>
        <div>
          <AuthorDescription content={authorDescription} />
          <AuthorName content={authorName} />
        </div>
      </Level>
    </div>
  );
}
