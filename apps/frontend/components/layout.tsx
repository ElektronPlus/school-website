import Navigation from './Navigation/navigation';
import Footer from './Footer/footer';
import { GetFooterQuery } from '../generated/graphql';
import { css } from '@emotion/react';
import StrapiImage from './strapiImage';
import Search from './search';

export default function Layout({
  children,
  navigationRes,
  footerData,
  footerLinks,
  background,
}: {
  children: React.ReactNode;
  navigationRes: object;
  footerData: GetFooterQuery;
  footerLinks: object[];
  background: object;
}) {
  return (
    <>
      <div css={css`z-index: -1; width: 100vw; height: 25%; position: absolute;`}>
        <StrapiImage
          image={background}
          imageProps={{
            layout: "fill",
            objectFit: "cover",
            objectPosition: "center",
            priority: true,
          }}
        />
      </div>
      <Navigation navigationRes={navigationRes} />
      <div className="wrapper">
        
        <main>{children}</main>
      </div>
      <Footer footerData={footerData} footerLinks={footerLinks} />
    </>
  );
}
