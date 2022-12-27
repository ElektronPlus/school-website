import { ReactNode, ElementType } from "react";

interface HeadingProps {
  as: ElementType;
  children: ReactNode
}

export const Heading = ({ as, children }: HeadingProps) => {
  const Component = as;

  return <Component>{children}</Component>
}