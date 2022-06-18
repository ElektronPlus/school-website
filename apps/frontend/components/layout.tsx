import Navigation from './Navigation/navigation';
import Footer from './Footer/footer';

export default function Layout({ children, navigationRes }) {
  return (
    <>
      <div className="wrapper">
        <Navigation navigationRes={navigationRes} />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
