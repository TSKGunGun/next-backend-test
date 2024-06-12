"use server";

import { Post } from "@/app/_types/post";
import { Posts } from "@/app/_types/posts";
import { User } from "../_types/user";
import { getPostsQuery } from "../_graphql/getPosts";
import { gql, useQuery } from "@apollo/client";
import { OrderByDirection } from "../_graphql/__generate__/graphql";

interface NewPostProps {
  user: User;
  message: string;
}

export async function store(data: NewPostProps): Promise<void> {
  await setInterval(() => {}, 5000);
}

export async function update(post: Post): Promise<Post> {
  await setInterval(() => {}, 5000);
  return {
    ...post,
    message: post.message + " updated",
  };
}

export async function remove(id: string): Promise<void> {
  await setInterval(() => {}, 5000);
}

export async function find(id: string): Promise<Post> {
  await setInterval(() => {}, 5000);
  return {
    id: 1,
    uid: "1",
    message: "test",
    created_at: new Date(),
  };
}

export function useGetAll(): any {
  const { loading, error, data } = useQuery(getPostsQuery, {
    variables: {
      orderBy: [
        {
          created_at: OrderByDirection.DescNullsLast,
        },
      ],
    },
  });

  if (loading) return 'Loading...';
  if (error) throw error;

  console.log(data);

  const posts = data!.postsCollection!.edges.map((edge: any) => edge.node);

  console.log(posts);

  return posts;
}
