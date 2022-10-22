import { useTheme } from "@emotion/react";
import { H } from "react-accessible-headings";

type TitleProps = {
  title: string;
}

export const EntryTitle = ({ title }: TitleProps) => {
  return <H css={{fontSize: "2rem", fontWeight: 700, textAlign: "center" }}>{title}</H>
}