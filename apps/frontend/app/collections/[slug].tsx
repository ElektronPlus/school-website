import ellipsize from "ellipsize";
import { fetchCollection } from "features/collections/utils/fetch-collection";
import { fetchCollections } from "features/collections/utils/fetch-collections";
import { Entry } from "features/entries/components/Entry";
import { Meta } from "features/seo/components/DefaultMeta";
import { MAXIMUM_META_DESCRIPTION_LENGTH } from "features/seo/constants";
import { htmlToText } from "html-to-text";
import { notFound } from "next/navigation";

interface PageProps {
  params: { slug: string };
}

export default async function Page(props: PageProps) {
  const { collection } = await fetchCollections(props.params.slug);


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
      
    </>
  );
}

export async function generateStaticParams() {
  const { slugs } = await fetchCollections();

  return slugs;
}
