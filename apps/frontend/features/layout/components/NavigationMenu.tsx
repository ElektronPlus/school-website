"use client";

import * as Nav from "@radix-ui/react-navigation-menu";
import { FetchNavigationDocument } from "features/layout/queries/FetchNavigation.generated";
import { client } from "lib/apolloClient";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import type { FetchNavigationQuery } from "src/types";

interface LinkProps extends Nav.NavigationMenuLinkProps {
  href: string;
}

const Link = ({ href, ...props }: LinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <NextLink href={href} passHref>
      <Nav.Link className="NavigationMenuLink" active={isActive} {...props} />
    </NextLink>
  );
};

export const NavigationMenu = async () => {

  return (
    <nav>
      <Nav.Root>
        <Nav.List>
          {navigation.renderNavigation.map(
            (item) =>
              item && (
                <Nav.Item key={item.id}>
                  <Nav.Trigger>{item.title}</Nav.Trigger>
                  <Nav.Content>
                    {item.items?.map(
                      (subitem) =>
                        subitem && (
                          <Link key={subitem.id} href={subitem.path ?? "#"}>
                            {subitem.title}
                          </Link>
                        ),
                    )}
                  </Nav.Content>
                </Nav.Item>
              ),
          )}
          <Nav.Indicator />
        </Nav.List>
        <Nav.Viewport />
      </Nav.Root>
    </nav>
  );
};
