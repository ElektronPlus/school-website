import { Heading } from "components/Heading";
import { Image } from "components/Image";
import { Tags } from "features/tags/components/Tags";
import { convert } from "html-to-text";
import dynamic from "next/dynamic";
import Link from "next/link";
import { EntryFragment } from "src/types";

const UserDateTime = dynamic(() => import("components/DateTime"), {
  loading: () => <p>...</p>,
  ssr: false,
});

interface CardProps {
  entry: EntryFragment;
}

export const Card = ({ entry }: CardProps) => {
  const { title, image, content, type, slug, tags, publishedAt } = entry;

  return (
    <article>
      <Link href={`${type}/${slug}`}>
        <Heading as="h2">{title}</Heading>
        {image?.data?.attributes && <Image image={image.data.attributes} />}
      </Link>
      <div>
        {tags?.data && <Tags tags={tags.data} />}
        <UserDateTime dateTime={publishedAt} />
      </div>
      {content && <p>{convert(content)}</p>}
    </article>
  );
};
