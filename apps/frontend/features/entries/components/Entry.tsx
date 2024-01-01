import { Heading } from "components/Heading";
import { Image } from "components/Image";
import { AuthorDetails } from "features/authors/component/AuthorDetails";
import { EntryDetails } from "features/entries/components/Details";
import { EntryFragment } from "features/entries/fragments/Entry.generated";
import { transformHtml } from "utils/content";

interface EntryProps {
  entry: EntryFragment;
}

export const Entry = ({ entry }: EntryProps) => {
  const { title, content, tags, publishedAt, author, image, slug } = entry;

  const titleId = `${slug}-title`;

  return (
    <article aria-describedby={titleId} className="entry">
      {image?.data?.attributes && <Image image={image.data.attributes} />}
      <Heading id={titleId} as="h2" className="title">
        {title}
      </Heading>
      <EntryDetails tags={tags} publishedAt={publishedAt} />
      {content && <div className="pt-8" dangerouslySetInnerHTML={{ __html: transformHtml(content) }} />}
      {author?.data?.attributes && <AuthorDetails author={author.data?.attributes} />}
    </article>
  );
};
