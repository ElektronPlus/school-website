import { Heading } from "components/Heading";
import { Image } from "components/Image";
import { AuthorDetails } from "features/authors/component/AuthorDetails";
import { EntryDetails } from "features/entries/components/Details";
import { EntryFragment } from "src/types";
import { transformHtml } from "utils/content";

interface EntryProps {
  entry: EntryFragment;
}

export const Entry = ({ entry }: EntryProps) => {
  const { title, content, tags, publishedAt, author, image } = entry;

  return (
    <article aria-describedby="title" className="entry">
      {image?.data?.attributes && <Image image={image.data.attributes} />}
      <Heading id="title" as="h2" className="title">
        {title}
      </Heading>
      <EntryDetails tags={tags} publishedAt={publishedAt} />
      {content && <div className="content" dangerouslySetInnerHTML={{ __html: transformHtml(content) }} />}
      {author?.data?.attributes && <AuthorDetails author={author.data?.attributes} />}
    </article>
  );
};
