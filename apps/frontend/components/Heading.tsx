import type { ReactNode, ElementType, HTMLAttributes } from "react";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as: ElementType;
  children: ReactNode;
}

export const Heading = ({ as, children, ...props }: HeadingProps) => {
  const Component = as;

  return <Component {...props}>{children}</Component>;
};
