import { Heading } from "components/Heading";
import { Alert } from "features/alert/components/Alert";
import { Footer } from "features/navigation/components/Footer";
import { DEFAULT_TITLE_LONG } from "features/seo/constants";
import type { ReactNode } from "react";


interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang={process.env.NEXT_PUBLIC_LANG}>
      <head />
      <body>
        <header>
          {<Heading as="h1">{DEFAULT_TITLE_LONG}</Heading>}
          {/* @ts-expect-error Server Component */}
          <Alert />
        </header>
        {children}
        {/* @ts-expect-error Server Component */}
        <Footer />
      </body>
    </html>
  );
}
