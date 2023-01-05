import "styles/globals.scss";
import "styles/normalize.scss";
import { Heading } from "components/Heading";
import { templateConfig } from "config.template";
import { Alert } from "features/layout/components/Alert";
import { Footer } from "features/layout/components/Footer";
import { NavigationMenu } from "features/layout/components/NavigationMenu";
import { FetchNavigationDocument } from "features/layout/queries/FetchNavigation.generated";
import { client } from "lib/apolloClient";
import type { ReactNode } from "react";
import { FetchNavigationQuery } from "src/types";

interface RootLayoutProps {
  children: ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const { data: navigation } = await client.query<FetchNavigationQuery>({
    query: FetchNavigationDocument,
    variables: {
      slug: "top",
    },
  });

  return (
    <html lang={process.env.NEXT_PUBLIC_LANG}>
      <head />
      <body>
        <header>
          <Heading as="h1">{templateConfig.title.short}</Heading>
          {/* @ts-expect-error Server Component */}
          <NavigationMenu data={navigation.renderNavigation} />
          {/* @ts-expect-error Server Component */}
          <Alert />
        </header>
        <main>{children}</main>
        {/* @ts-expect-error Server Component */}
        <Footer />
      </body>
    </html>
  );
}
