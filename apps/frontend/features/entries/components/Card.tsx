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
    <Link href={`${type}/${slug}`} className="card-wrapper">
      <article aria-describedby={slug} className="card">
        {image?.data?.attributes && <Image className="thumbnail" image={image.data.attributes} />}
        <div className="text">
          <div className="title">
            <Heading as="h3" id={slug} className="title">
              {title}
            </Heading>
            <EntryDetails tags={tags} publishedAt={publishedAt} />
          </div>
          {content && <p className="content">{convert(content)}</p>}
        </div>
      </article>
    </Link>
  );
};
