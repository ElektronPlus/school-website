import "styles/globals.scss";
import "styles/normalize.scss";
import { Heading } from "components/Heading";
import { Image } from "components/Image";
import { Alert } from "features/layout/components/Alert";
import { Footer } from "features/layout/components/Footer";
import { fetchLayout } from "features/layout/utils.ts/fetch-layout";
import { font } from "lib/font";
import Link from "next/link";
import type { ReactNode } from "react";
import { templateConfig } from "site.config";

interface RootLayoutProps {
  children: ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const { layout } = await fetchLayout();

  return (
    <html lang={process.env.NEXT_PUBLIC_LANG} className={font.className}>
      <body>
        <header className="header">
          <div className="first_row">
            <Link href="/">
              <Heading as="h1" variant="2xl">
                {templateConfig.title.short}
              </Heading>
            </Link>
          </div>
          <Alert />
        </header>
        <div className="layout_background_wrapper">
          {layout.layout?.data?.attributes?.background?.data?.attributes && (
            <Image
              className="layout_background"
              image={layout.layout?.data?.attributes?.background.data?.attributes}
              priority
            />
          )}
        </div>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
