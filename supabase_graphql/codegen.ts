import type { CodegenConfig } from "@graphql-codegen/cli";
import { addTypenameSelectionDocumentTransform } from "@graphql-codegen/client-preset";

const config: CodegenConfig = {
  schema: [
    {
      [process.env.NEXT_PUBLIC_SUPABASE_GRAPHQL_URL!]: {
        headers: {
          apiKey: process.env.NEXT_PUBLIC_SUPABASE_API_KEY!,
        },
      },
    },
  ],
  documents: "/**/*.tsx",
  overwrite: true,
  ignoreNoDocuments: true,
  generates: {
    "app/_graphql/": {
      preset: "client",
      documentTransforms: [addTypenameSelectionDocumentTransform],
      plugins: [],
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
