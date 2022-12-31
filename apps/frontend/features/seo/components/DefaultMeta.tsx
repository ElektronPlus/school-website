import ellipsize from "ellipsize";
import { DEFAULT_TITLE_LONG, MAXIMUM_META_DESCRIPTION_LENGTH } from "features/seo/constants";
import { trimTitle } from "features/seo/utilts";

interface MetaProps {
  title?: string | null;
  description?: string | null;
}

export const Meta = ({ title, description }: MetaProps) => {

  return (
    <>
      <title>{title ? `${trimTitle(title)}` : DEFAULT_TITLE_LONG}</title>
      {description && (
        <meta
          name="description"
          content={ellipsize(description, MAXIMUM_META_DESCRIPTION_LENGTH)}
        />
      )}
    </>
  );
};
