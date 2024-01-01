import { Heading } from "components/Heading";
import { fetchCollection } from "features/collections/utils/fetch-collection";
import { fetchCollections } from "features/collections/utils/fetch-collections";
import { Card } from "features/entries/components/Card";
import { Meta } from "features/seo/components/DefaultMeta";
import { notFound } from "next/navigation";

interface PageProps {
  params: { slug: string };
}

export default async function Page(props: PageProps) {
  const { collection } = await fetchCollection(props.params.slug);

  if (!collection) {
    notFound();
  }

  return (
    <>
      <Meta
        title={collection.attributes?.name}
        // description={ellipsize(
        //   collection.attributes.description ?? htmlToText(entry.content ?? ""),
        //   MAXIMUM_META_DESCRIPTION_LENGTH,
        // )}
      />
      <section className="pt-20 px-4">
        <h2 className="text-2xl font-bold">{collection.attributes?.name}</h2>
        <ul className="grid gap-4 md:grid-cols-2">
          {collection.attributes?.link?.entries?.data.map(
            (entry) =>
              entry.attributes && <Card key={entry.id} entry={entry.attributes} />
          )}
        </ul>
      </section>
    </>
  );
}

export async function generateStaticParams() {
  const { slugs } = await fetchCollections();

  return slugs;

  return ["uczen"];
}
