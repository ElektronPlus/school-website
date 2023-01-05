import { Heading } from "components/Heading";
import { FetchSocialsQuery } from "features/socials/queries/FetchSocials.generated";
import { FetchSocialsDocument } from "features/socials/queries/FetchSocials.generated";
import { client } from "lib/apolloClient";
import Link from "next/link";
import { SocialFragment } from "src/types";
import { t } from "utils/translations";

const fetchSvg = async (socials: SocialFragment) => {
  const res = await fetch(
    `https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/${socials?.icon}.svg`,
  );

  return await res.text();
};

export const Socials = async () => {
  const { data } = await client.query<FetchSocialsQuery>({
    query: FetchSocialsDocument,
  });

  const socials = data.socials?.data;

  if (!socials) {
    return null;
  }

  const items = await Promise.all(
    socials.map(
      async ({ attributes: social }) =>
        social && {
          ...social,
          svg: await fetchSvg(social),
        },
    ),
  );

  return (
    <section aria-describedby="socials" className="socials">
      <Heading as="h2" id="socials" className="sr-only">
        {t("socials")}
      </Heading>
      <ul className="items">
        {items.map((item) => item && (
          <li key={item.link} className="item">
            <Link href={item.link ?? "#"} className="link">
              <div
                className="icon"
                dangerouslySetInnerHTML={{
                  __html: item.svg,
                }}
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
