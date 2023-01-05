import { Tags } from "features/tags/components/Tags";
import dynamic from "next/dynamic";
import { EntryFragment } from "src/types";

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
    <div className="details">
      {tags?.data && tags.data.length !== 0 && (
        <>
          <Tags tags={tags.data} />
          <span>&nbsp;&ndash;&nbsp;</span>
        </>
      )}
      <UserDateTime dateTime={publishedAt} />
    </div>
  );
};
