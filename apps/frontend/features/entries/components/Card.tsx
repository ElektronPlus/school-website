import { Heading } from "components/Heading";
import { Image } from "components/Image";
import { EntryDetails } from "features/entries/components/Details";
import { convert } from "html-to-text";
import Link from "next/link";
import { EntryFragment } from "src/types";

interface CardProps {
  entry: EntryFragment;
}

export const Card = ({ entry }: CardProps) => {
  const { title, image, content, type, slug, tags, publishedAt } = entry;

  return (
    <article aria-describedby={slug} className="card">
      {image?.data?.attributes && <Image className="thumbnail" image={image.data.attributes} />}
      <div className="text">
        <div>
          <Link href={`${type}/${slug}`}>
            <Heading as="h2" id={slug} className="title">
              {title}
            </Heading>
          </Link>
          <EntryDetails tags={tags} publishedAt={publishedAt} />
        </div>
        {content && <p className="content">{convert(content)}</p>}
      </div>
    </article>
  );
};
