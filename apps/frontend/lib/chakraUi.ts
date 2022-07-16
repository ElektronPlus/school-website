import { extendTheme, theme as base } from '@chakra-ui/react';

export const theme = extendTheme({
  fonts: {
    heading: `IBM Plex Sans, ${base.fonts?.heading}`,
    body: `IBM Plex Sans, ${base.fonts?.heading}`,
  },
});
