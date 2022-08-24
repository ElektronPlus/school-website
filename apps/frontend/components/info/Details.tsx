import { css, useTheme } from '@emotion/react';
import { InfoDate } from './Date';

export function InfoDetails({
  publishedAt,
}) {
  const theme = useTheme();
  return (
    <span
      css={{
        letterSpacing: '1.1px',
        fontSize: '0.85rem',
        color: theme.color.text.light.hexa(),
        textTransform: 'uppercase',
      }}
    >
      <InfoDate publishedAt={publishedAt} />
    </span>
  );
}
