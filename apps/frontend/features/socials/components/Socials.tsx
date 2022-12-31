import { Heading } from "components/Heading";
import { FetchSocialsQuery } from "features/socials/queries/FetchSocials.generated";
import { FetchSocialsDocument } from "features/socials/queries/FetchSocials.generated";
import { client } from "lib/apolloClient";
import Link from "next/link";
import { t } from "utils/translations";

export const Socials = async () => {
  const { data } = await client.query<FetchSocialsQuery>({
    query: FetchSocialsDocument,
  });

  const socials = data.socials?.data;

  if (!socials) {
    return null;
  }

  return (
    <section aria-describedby="socials">
      <Heading as="h2" id="socials" className="sr-only">{t("socials")}</Heading>
      <ul>
        {socials.map(({ attributes: social }) => (
          <li key={social?.link}>
            <Link href={social?.link ?? "#"}>{social?.icon}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
