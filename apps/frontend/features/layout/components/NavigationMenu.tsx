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
    <Nav.Root className="menu">
      <Nav.List className="list">
        {data.map(
          (item) =>
            item && (
              <Nav.Item className="item" key={item.id}>
                <Nav.Trigger className="trigger">{item.title}</Nav.Trigger>
                <Nav.Content className="content">
                  <ul className="content__list">
                    {item.items?.map(
                      (subitem) =>
                        subitem && (
                          <li key={subitem.id} className="content__item">
                            <Link className="link" href={subitem.path ?? "#"}>
                              {subitem.title}
                            </Link>
                          </li>
                        ),
                    )}
                  </ul>
                </Nav.Content>
              </Nav.Item>
            ),
        )}
        <Nav.Indicator className="indicator" />
      </Nav.List>
      <div className="viewportPosition">
        <Nav.Viewport className="viewport" />
      </div>
    </Nav.Root>
  );
};
