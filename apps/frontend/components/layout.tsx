import Navigation from "./navigation";
import Footer from "./footer";

export default function Layout({ children }: { children: React.ReactNode; }) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
}
