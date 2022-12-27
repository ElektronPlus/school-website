import { AuthorDetails } from "features/authors/component/AuthorDetails";
import { Author } from "features/authors/queries/FetchAuthor.generated";
import { FetchAuthorDocument } from "features/authors/queries/FetchAuthor.generated";
import { FetchAuthorsQuery } from "features/authors/queries/FetchAuthors.generated";
import { FetchAuthorsDocument } from "features/authors/queries/FetchAuthors.generated";
import { client } from "lib/apolloClient";
import { FetchAuthorQuery } from "src/types";


interface PageProps {
  params: { slug: string };
}

export default async function Page({ params}: PageProps) {
  const { data } = await client.query<FetchAuthorQuery>({
    query: FetchAuthorDocument,
    variables: {
      slug: params.slug,
    },
  });

  const author = data.authors?.data[0].attributes as Author;

  return (
    <main>
      <AuthorDetails author={author} />
    </main>
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
