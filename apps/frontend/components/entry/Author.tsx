import { css, useTheme } from '@emotion/react';
import { H, Level } from 'react-accessible-headings';
import Avatar from 'react-avatar';

function AuthorDescription({ content }: { content: string }) {
  const theme = useTheme();

  if (content !== null) {
    return (
      <span
        css={css`
          letter-spacing: 1.1;
          font-size: 0.85rem;
          color: ${theme.color.text.light.hexa()};
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
  if (content === null) {
    return null;
  }

  return (
    <H
      css={{fontSize: "1.25rem"}}
    >
      {content}
    </H>
  );
}

export function EntryAuthor({
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
      css={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        borderTop: "1px solid #e5e5e5",
        marginTop: "32px",
        width: "100%",
      }}
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
