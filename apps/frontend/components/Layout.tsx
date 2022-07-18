import { css } from '@emotion/react';
import Footer from 'components/footer/Footer';
import Navigation from 'components/navigation/Navigation';
import { StrapiImage } from 'components/StrapiImage';
import { GetAlertQuery, GetFooterQuery, Maybe, UploadFileEntityResponse, NavigationItem } from 'generated/graphql';
import type {PartialDeep} from 'type-fest';

export default function Layout({
  children,
  navigationRes,
  footerData,
  footerLinks,
  background,
  alertData,
  header
}: {
  children: React.ReactNode;
  navigationRes: Array<Maybe<NavigationItem>>;
  footerData: GetFooterQuery;
  footerLinks: Array<Maybe<NavigationItem>>;
  background: object;
  alertData: GetAlertQuery;
  header: PartialDeep<UploadFileEntityResponse>;
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
        header={header}
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
