import { css } from '@emotion/react';
import { H } from 'react-accessible-headings';

export function InfoTitle({ title, slug }) {
  return (
    <H
      css={css`
        font-size: 2rem;
        padding-bottom: 48px;
        font-weight: 700;
      `}
    >
      {title}
    </H>
  );
}
