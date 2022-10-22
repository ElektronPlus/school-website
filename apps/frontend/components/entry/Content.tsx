import { useTheme } from '@emotion/react';
import { ReactNode } from 'react';

type ContentProps = {
  children: ReactNode;
};

export const EntryContent = ({ children }: ContentProps) => {
  const theme = useTheme();

  return (
    <div css={{ color: theme.color.text.secondary.hexa() }}>{children}</div>
  );
};
