import { css } from '@emotion/react';
import Footer from 'components/footer/Footer';
import Navigation from 'components/navigation/Navigation';
import StrapiImage from 'components/StrapiImage';
import { GetAlertQuery, GetFooterQuery } from 'generated/graphql';

export default function Layout({
  children,
  navigationRes,
  footerData,
  footerLinks,
  background,
  alertData,
  headerImgSrc,
  headerAlternativeText,
}: {
  children: React.ReactNode;
  navigationRes: object;
  footerData: GetFooterQuery;
  footerLinks: object[];
  background: object;
  alertData: GetAlertQuery;
  headerImgSrc: string;
  headerAlternativeText?: string;
}) {
  return (
    <>
      <div
        css={css`
          z-index: -1;
          width: 100%;
          height: 25%;
          position: absolute;
        `}
      >
        <StrapiImage
          image={background}
          imageProps={{
            layout: 'fill',
            objectFit: 'cover',
            objectPosition: 'center',
            priority: true,
          }}
        />
      </div>
      <Navigation
        headerImgSrc={headerImgSrc}
        headerAlternativeText={headerAlternativeText}
        navigationRes={navigationRes}
        alertData={alertData}
      />
      <div className="wrapper">
        <main>{children}</main>
      </div>
      <Footer footerData={footerData} footerLinks={footerLinks} />
    </>
  );
}
