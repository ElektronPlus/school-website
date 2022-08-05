import Color from 'color';
import { Theme } from '@emotion/react';

const colors = {
  colors: {
    primary: '#006699',
  },
};

// remember to update emotion.d.ts for typing
export const theme: Theme = {
  color: {
    primary: Color(colors.colors.primary),
    text: {
        primary: Color(colors.colors.primary).darken(0.55),
        secondary: Color(colors.colors.primary).alpha(0.87),
    },
    background: {
        primary: Color(colors.colors.primary),
        transculent: Color('#ffffff'),
    },
    shadow: Color(colors.colors.primary).darken(0.5),
    border: {
      primary: Color(colors.colors.primary).alpha(0.2).darken(0.2),
      withShadow: Color(colors.colors.primary).darken(0.5),
    },
  },
};
