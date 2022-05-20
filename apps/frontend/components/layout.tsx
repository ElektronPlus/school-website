import Navigation from "./navigation";
import Footer from "./footer";

export default function Layout({ children }: { children: React.ReactNode; }) {
  return (
    <>
      <div className="wrapper">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
