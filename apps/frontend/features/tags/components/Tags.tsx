import { TagEntity } from "fragments/Image.generated";
import Link from "next/link";
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
              <Link href={`tag/${tag.slug}`}>{tag.name}</Link>
            </Fragment>
          ),
      )}
    </p>
  );
};
