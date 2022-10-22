import parse from "node-html-parser";
import { META_DESCRIPTION_MAX_LENGTH } from "constants/index";


export function truncate(string: string, maxLength: number) {
  return (string.length > maxLength) ? string.slice(0, maxLength - 1) + '...' : string;
};
export const getMetaDescriptionFromContent = (content: string) => {
  return truncate(parse(content).textContent, META_DESCRIPTION_MAX_LENGTH);
}