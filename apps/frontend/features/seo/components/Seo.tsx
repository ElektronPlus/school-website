import { NextSeo, NextSeoProps } from "next-seo"
import { getMetaDescription } from "../utils";

export const Seo = (props: NextSeoProps) => {
  return <NextSeo {...props} description={getMetaDescription(props.description)} />
}