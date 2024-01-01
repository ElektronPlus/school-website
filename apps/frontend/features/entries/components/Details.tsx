import { EntryFragment } from "features/entries/fragments/Entry.generated";
import { Tags } from "features/tags/components/Tags";
import dynamic from "next/dynamic";

const UserDateTime = dynamic(() => import("components/DateTime"), {
  loading: () => <p>...</p>,
  ssr: false,
});

interface EntryDetailsProps {
  tags?: EntryFragment["tags"];
  publishedAt: string;
}

export const EntryDetails = ({ tags, publishedAt }: EntryDetailsProps) => {
  return (
    <div className="uppercase flex">
      {tags?.data && tags.data.length !== 0 && (
        <>
          <Tags tags={tags.data} />
          <span className="hidden md:block">&nbsp;&ndash;&nbsp;</span>
        </>
      )}
      <UserDateTime dateTime={publishedAt} />
    </div>
  );
};
