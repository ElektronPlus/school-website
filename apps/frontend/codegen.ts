
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:1337/graphql",
  documents: "./**/*.graphql",
  generates: {
    "src/types.ts": {
        plugins: [
            "typescript",
            "typescript-operations",
            "fragment-matcher"
        ],
        config: {
            apolloClientVersion: 3,
            useExplicitTyping: true,
        },
    },
    "./graphql.schema.json": {
        plugins: ["introspection"],
    },
    "src/": {
      preset: "near-operation-file",
      presetConfig: {
        extension: ".generated.tsx",
        baseTypesPath: "types.ts",
      },
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
    }
  }
};

export default config;
