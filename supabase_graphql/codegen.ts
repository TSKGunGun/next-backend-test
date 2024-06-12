import type { CodegenConfig } from "@graphql-codegen/cli";
import { addTypenameSelectionDocumentTransform } from "@graphql-codegen/client-preset";

const config: CodegenConfig = {
  schema: [
    {
      [process.env.NEXT_PUBLIC_SUPABASE_GRAPHQL_URL!]: {
        headers: {
          apiKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        },
      },
    },
  ],
  documents: "app/_graphql/**/*.ts",
  overwrite: true,
  ignoreNoDocuments: true,
  generates: {
    "app/_graphql/__generate__/": {
      preset: "client",
      documentTransforms: [addTypenameSelectionDocumentTransform],
      plugins: [],
      presetConfig: {
        gqlTagName: "gql",
      },
      config: {
        scalars: {
          UUID: "string",
          Date: "string",
          Time: "string",
          Datetime: "string",
          JSON: "string",
          BigInt: "string",
          BigFloat: "string",
          Opaque: "any",
        },
      },
    },
  },
  hooks: {
    afterAllFileWrite: ["npm run prettier"], // optional
  },
};

export default config;
