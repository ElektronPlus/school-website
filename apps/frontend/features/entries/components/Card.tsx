import clsx from "clsx";
import { Heading } from "components/Heading";
import { Image } from "components/Image";
import { EntryDetails } from "features/entries/components/Details";
import { EntryFragment } from "features/entries/fragments/Entry.generated";
import { getEntryUrl } from "features/entries/utils/get-entry-url";
import { convert } from "html-to-text";
import Link from "next/link";

interface CardProps {
  entry: EntryFragment;
  cardSize?: "big" | "small";
  withImage?: boolean;
  withDetails?: boolean;
}

export const Card = ({ entry, withImage = true, withDetails = true, cardSize = "small" }: CardProps) => {
  const { title, image, content, type, slug, tags, publishedAt } = entry;

  return (
    <Link
      href={getEntryUrl({
        type,
        slug,
      })}
      className={clsx({
        "h-[80vh]": cardSize === "big",
      })}>
      <article
        aria-describedby={slug}
        className="border shadow-lg rounded p-4 bg-white flex gap-4">
        {withImage && image?.data?.attributes && (
          <Image className="aspect-[16/9] object-cover w-64" image={image.data.attributes} />
        )}
        <div className="grid gap-4 justify-between">
          <div className="grid gap-1">
            <Heading as="h3" id={slug} className="grid gap-1">
              {title}
            </Heading>
            {withDetails && <EntryDetails tags={tags} publishedAt={publishedAt} />}
          </div>
          {content && <p className="pt-2">{convert(content)}</p>}
        </div>
      </article>
    </Link>
  );
};
