import Navigation from './Navigation/navigation';
import Footer from './Footer/footer';
import { GetFooterQuery } from '../generated/graphql';

export default function Layout({ children, navigationRes, footerData, footerLinks }: {children: React.ReactNode, navigationRes: object, footerData: GetFooterQuery, footerLinks: object[]}) {
  return (
    <>
      <div className="wrapper">
        <Navigation navigationRes={navigationRes} />
        <main>{children}</main>
      </div>
      <Footer footerData={footerData} footerLinks={footerLinks} />
    </>
  );
}
