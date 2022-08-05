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
        secondary: Color(colors.colors.primary).darken(0.35).alpha(0.8),
        light: Color(colors.colors.primary).lighten(0.3),
    },
    background: {
        primary: Color(colors.colors.primary),
        transculent: Color('#ffffff').alpha(0.8),
    },
    shadow: Color(colors.colors.primary).darken(0.5).alpha(0.1),
    border: {
      primary: Color(colors.colors.primary).alpha(0.2).darken(0.2),
      withShadow: Color(colors.colors.primary).darken(0.5).alpha(0.15),
    },
  },
};
