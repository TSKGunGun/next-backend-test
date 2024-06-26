/* eslint-disable */
import * as types from "./graphql";
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  "\n  query GetPosts($orderBy:[postsOrderBy!], $after: Cursor) {\n    postsCollection(orderBy:$orderBy, after: $after) {\n      edges {\n        cursor\n        node {\n          id\n          message\n          created_at\n          user_info {\n            name\n            icon_url\n          }\n        }\n      }\n    }\n  }\n":
    types.GetPostsDocument,
  "\n  mutation AddNewPost($uid: UUID!, $message:String!, $created_at:Datetime!) {\n    insertIntopostsCollection(\n      objects: [\n        {\n          uid: $uid,\n          message: $message,\n          created_at: $created_at\n        },\n      ]\n    ) {\n      records {\n        id\n        message\n        created_at\n        user_info {\n          uid\n          name\n          icon_url\n        }\n      }\n    }\n  } \n":
    types.AddNewPostDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  query GetPosts($orderBy:[postsOrderBy!], $after: Cursor) {\n    postsCollection(orderBy:$orderBy, after: $after) {\n      edges {\n        cursor\n        node {\n          id\n          message\n          created_at\n          user_info {\n            name\n            icon_url\n          }\n        }\n      }\n    }\n  }\n",
): (typeof documents)["\n  query GetPosts($orderBy:[postsOrderBy!], $after: Cursor) {\n    postsCollection(orderBy:$orderBy, after: $after) {\n      edges {\n        cursor\n        node {\n          id\n          message\n          created_at\n          user_info {\n            name\n            icon_url\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  mutation AddNewPost($uid: UUID!, $message:String!, $created_at:Datetime!) {\n    insertIntopostsCollection(\n      objects: [\n        {\n          uid: $uid,\n          message: $message,\n          created_at: $created_at\n        },\n      ]\n    ) {\n      records {\n        id\n        message\n        created_at\n        user_info {\n          uid\n          name\n          icon_url\n        }\n      }\n    }\n  } \n",
): (typeof documents)["\n  mutation AddNewPost($uid: UUID!, $message:String!, $created_at:Datetime!) {\n    insertIntopostsCollection(\n      objects: [\n        {\n          uid: $uid,\n          message: $message,\n          created_at: $created_at\n        },\n      ]\n    ) {\n      records {\n        id\n        message\n        created_at\n        user_info {\n          uid\n          name\n          icon_url\n        }\n      }\n    }\n  } \n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
