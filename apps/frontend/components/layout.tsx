import Navigation from "./navigation";

export default function Layout({ children }: { children: React.ReactNode; }) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
    </>
  );
}
