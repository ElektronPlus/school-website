import { css, useTheme } from '@emotion/react';
import Footer from 'components/footer/Footer';
import Navigation from 'components/navigation/Navigation';
import { StrapiImage } from 'components/StrapiImage';
import { GlobalContext } from 'pages/_app';
import { useContext } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const context = useContext(GlobalContext);
  const theme = useTheme();

  return (
    <div css={{color: theme.color.text.primary.hexa()}}>
      <div
        css={css`
          z-index: -1;
          width: 100%;
          height: 25%;
          position: absolute;
          mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1.0) 50%, transparent 100%);
        `}
      >
        <StrapiImage
          image={context.global.global.data.attributes.background}
          imageProps={{
            layout: 'fill',
            objectFit: 'cover',
            objectPosition: 'center',
            priority: true,
          }}
        />
      </div>
      <Navigation />
      <div className="wrapper">
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}
