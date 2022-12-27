import { Heading } from "components/Heading";
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
        {children}
      </body>
    </html>
  );
}
