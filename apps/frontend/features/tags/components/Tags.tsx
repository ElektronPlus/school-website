import { TagEntity } from "fragments/Image.generated";
import { Fragment } from "react";
import { t } from "utils/translations";

interface TagsProps {
  tags?: TagEntity[];
}

export const Tags = ({ tags }: TagsProps) => {
  return (
    <p className="entry__tags">
      <span className="sr-only">{`${t("tags")}: `}</span>
      {tags?.map(
        ({ attributes: tag }, index) =>
          tag && (
            <Fragment key={tag.slug}>
              {index > 0 && " • "}
              {tag.name}
            </Fragment>
          ),
      )}
    </p>
  );
};
