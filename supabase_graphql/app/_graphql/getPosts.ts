import { gql } from "@/app/_graphql/__generate__";

export const getPostsQuery = gql(`
  query GetPosts($orderBy:[postsOrderBy!], $after: Cursor) {
    postsCollection(orderBy:$orderBy, after: $after) {
      edges {
        cursor
        node {
          id
          message
          created_at
          user_info {
            name
            icon_url
          }
        }
      }
      pageInfo {
        startCursor
        endCursor
        hasPreviousPage
        hasNextPage
      }
    }
  }
`);
