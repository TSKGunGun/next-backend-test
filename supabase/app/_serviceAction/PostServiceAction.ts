"use server"

import { Post } from '@/app/_types/post';
import { Posts } from '@/app/_types/posts';
import { User } from '../_types/user';
import { createDatabaseClient } from '../_utils/supabase/database';

interface NewPostProps {
  user: User;
  message: string;
}

function getDB() {
  return createDatabaseClient();
}

export async function store(data: NewPostProps): Promise<void> {
  const db = getDB();
  const { error } = await db.from('posts').insert({
    uid: data.user.uid,
    message: data.message,
  });

  if (error) {
    throw new Error(error.message);
  }
}

export async function update(post: Post): Promise<Post> {
  await new Promise(resolve => setTimeout(resolve, 500));
  return post;
}

export async function remove(id: string): Promise<void> {
  await new Promise(resolve => setTimeout(resolve, 500));
}

export async function find(id: string): Promise<Post> {
  await new Promise(resolve => setTimeout(resolve, 500));
  return {
    "id": 1,
    "uid": "1",
    "message": "今日もいい天気ですね。",
    "created_at": new Date(),
  };
}

export  async function getAll(): Promise<Posts> {
  const db = getDB();
  const { data, error } = await db.from('posts').select('*');

  if (error) {
    throw new Error(error.message);
  }

  let posts: Post[] = data.map( (item) => {
    let post = {
      "id": item.id,
      "uid": item.uid,
      "message": item.message,
      "created_at": new Date(item.created_at)
    };
    return post;
  });

  const sortedPosts:Post[] = posts.toSorted((a, b) => {
    return b.created_at.getTime() - a.created_at.getTime();
  })

  return {
    "data" : sortedPosts
  };
}