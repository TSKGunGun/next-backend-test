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
    }
  }
`);

export const addNewPostMutation = gql(`
  mutation AddNewPost($uid: UUID!, $message:String!, $created_at:Datetime!) {
    insertIntopostsCollection(
      objects: [
        {
          uid: $uid,
          message: $message,
          created_at: $created_at
        },
      ]
    ) {
      records {
        id
        message
        created_at
        user_info {
          uid
          name
          icon_url
        }
      }
    }
  } 
`);
