"use server";

import { Post } from "@/app/_types/post";
import { Posts } from "@/app/_types/posts";
import { User } from "../_types/user";
import { getPostsQuery } from "../_graphql/getPosts";
import { OrderByDirection } from "../_graphql/__generate__/graphql";
import { createApolloClient } from "../_utils/apollo/client";

interface NewPostProps {
  user: User;
  message: string;
}

export async function store(data: NewPostProps): Promise<void> {
  await setInterval(() => {}, 5000);
}

export async function getAll(): Promise<Posts> {
  const client = createApolloClient();

  const { error, data } = await client.query({
    query: getPostsQuery,
    variables: {
      orderBy: [
        {
          created_at: OrderByDirection.DescNullsLast,
        },
      ],
    },
  });

  if (error) {
    throw error;
  }

  const posts = data.postsCollection?.edges.map((edge) => {
    const post:Post = {
      id: Number(edge.node.id),
      message: edge.node.message,
      created_at: new Date(edge.node.created_at),
      user_info: {
        name: edge.node.user_info.name,
        icon_url: edge.node.user_info.icon_url,
      },
    };

    return post;
    }
  );

  return {
    data: posts!,
  };
}
