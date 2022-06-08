import Navigation from "./navigation";
import Footer from "./footer";

export default function Layout({children, navigationRes}) {
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
