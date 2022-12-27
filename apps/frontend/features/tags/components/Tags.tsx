import { TagEntity } from "fragments/Image.generated";
import { Fragment } from "react";

interface TagsProps {
  tags?: TagEntity[];
}

export const Tags = ({ tags }: TagsProps) => {
  return (
    <p>
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
