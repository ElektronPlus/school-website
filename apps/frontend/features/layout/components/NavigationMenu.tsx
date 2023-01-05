"use client";

import * as Nav from "@radix-ui/react-navigation-menu";
import { NavigationItem } from "features/layout/fragment/NavigationItem.generated";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

interface LinkProps extends Nav.NavigationMenuLinkProps {
  href: string;
}

interface NavigationMenuProps {
  data: NavigationItem[];
}

const Link = ({ href, ...props }: LinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <NextLink href={href} legacyBehavior passHref>
      <Nav.Link className="NavigationMenuLink" active={isActive} {...props} />
    </NextLink>
  );
};

export const NavigationMenu = ({ data }: NavigationMenuProps) => {
  return (
    <Nav.Root>
      <Nav.List>
        {data.map(
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
  );
};
