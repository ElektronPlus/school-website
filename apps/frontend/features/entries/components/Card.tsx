import { Heading } from "components/Heading";
import { Image } from "components/Image";
import { EntryFragment } from "src/types";
import { convert } from "html-to-text";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Fragment } from "react";

interface CardProps {
  entry: EntryFragment;
}

const UserDateTime = dynamic(() => import("components/DateTime"), {
  loading: () => <p>...</p>,
  ssr: false,
});

export const Card = ({ entry }: CardProps) => {
  const { title, image, content, type, slug, tags, publishedAt } = entry;

  return (
    <article>
      <Link href={`${type}/${slug}`}>
        <Heading as="h2">{title}</Heading>
        {image?.data?.attributes && <Image image={image.data.attributes} />}
      </Link>
      <div>
        <p>
          {tags?.data.map(
            ({ attributes: tag }, index) =>
              tag && (
                <Fragment key={tag.slug}>
                  {index > 0 && " • "}
                  <Link href={`tag/${tag.slug}`}>{tag.name}</Link>
                </Fragment>
              ),
          )}
        </p>
        <UserDateTime dateTime={publishedAt} />
      </div>
      {content && <p>{convert(content)}</p>}
    </article>
  );
};
