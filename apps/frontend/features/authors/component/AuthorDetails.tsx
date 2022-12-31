import { Heading } from "components/Heading";
import { Image } from "components/Image";
import Link from "next/link";
import type { AuthorMinimalFragment } from "src/types";
import { t } from "utils/translations";

interface AuthorProps {
  author: AuthorMinimalFragment;
}

export const AuthorDetails = ({ author }: AuthorProps) => {
  const { name, description, slug, avatar } = author;

  return (
    <section aria-labelledby="author">
      {avatar?.data?.attributes && (
        <Image image={avatar?.data?.attributes} width="64" height="64" sizes="64px" alt="" />
      )}
      <Link href={`/@/${slug}`}>
        <Heading id="author" as="h2">
          <span>{`${t("author")}: `}</span>
          {name}
        </Heading>
      </Link>
      <p>{description}</p>
    </section>
  );
};
