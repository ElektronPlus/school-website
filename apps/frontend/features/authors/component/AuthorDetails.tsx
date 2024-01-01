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
    <section aria-labelledby={slug} className="grid gap-1 text-center">
      {avatar?.data?.attributes && (
        <Image className="aspect-[1/1] w-16 mx-auto my-0 rounded-full" image={avatar?.data?.attributes} sizes="64px" alt="" />
      )}
      <Link href={`/@/${slug}`} className="link">
        <Heading id={slug} as="h2" className="name">
          <span className="sr-only">{`${t("author")}: `}</span>
          {name}
        </Heading>
      </Link>
      <p className="description">{description}</p>
    </section>
  );
};
