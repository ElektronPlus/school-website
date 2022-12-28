import { Heading } from "components/Heading";
import { Alert } from "features/alert/components/Alert";
import { Footer } from "features/navigation/components/Footer";
import type { ReactNode } from "react";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang={process.env.NEXT_PUBLIC_LANG}>
      <head />
      <body>
        <Heading as="h1">CKZIU Elektronik</Heading>
        {/* @ts-expect-error Server Component */}
        <Alert />
        {children}
        {/* @ts-expect-error Server Component */}
        <Footer />
      </body>
    </html>
  );
}
