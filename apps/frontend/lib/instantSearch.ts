import { instantMeiliSearch } from '@meilisearch/instant-meilisearch';

export const searchClient = instantMeiliSearch(
  process.env.NEXT_PUBLIC_MEILISEARCH_INSTANCE_URL,
  process.env.NEXT_PUBLIC_MEILISEARCH_PUBLIC_KEY
);
