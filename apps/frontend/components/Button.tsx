import { useTheme } from "@emotion/react";
import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href: string;
}

export const Button = ({children, href}: ButtonProps) => {
  const theme = useTheme();

  return <Link href={href} passHref>
    <a>
  <div css={{padding: "16px", color: theme.color.text.secondary.hexa()}}>
    {children}
  </div>
  </a>
  </Link>
}