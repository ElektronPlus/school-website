import { Enum_Entry_Type } from "src/types";

export const getEntryUrl = ({ type, slug }: { type: Enum_Entry_Type; slug: string }) =>
  `/${type}/${slug}` as const;
