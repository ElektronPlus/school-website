import ellipsize from "ellipsize";
import { AuthorDetails } from "features/authors/component/AuthorDetails";
import { FetchAuthorDocument } from "features/authors/queries/FetchAuthor.generated";
import { FetchAuthorsQuery } from "features/authors/queries/FetchAuthors.generated";
import { FetchAuthorsDocument } from "features/authors/queries/FetchAuthors.generated";
import { Meta } from "features/seo/components/DefaultMeta";
import { MAXIMUM_META_DESCRIPTION_LENGTH } from "features/seo/constants";
import { client } from "lib/apolloClient";
import { notFound } from "next/navigation";
import { FetchAuthorQuery } from "src/types";

interface PageProps {
  params: { slug: string };
}

export default async function Page({ params }: PageProps) {
  const { data } = await client.query<FetchAuthorQuery>({
    query: FetchAuthorDocument,
    variables: {
      slug: params.slug,
    },
  });

  const author = data.authors?.data[0]?.attributes;

  if (!author) {
    notFound();
  }

  return (
    <>
      <Meta
        title={author.name}
        {...(author.description && { description: ellipsize(author.description, MAXIMUM_META_DESCRIPTION_LENGTH) })}
      />
      <main>
        <AuthorDetails author={author} />
      </main>
    </>
  );
}

export async function generateStaticParams() {
  const { data } = await client.query<FetchAuthorsQuery>({
    query: FetchAuthorsDocument,
  });

  return data.authors?.data.map(({ attributes: author }) => ({
    ...author,
  }));
}
