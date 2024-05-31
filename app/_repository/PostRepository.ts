import { Post } from '@/app/_types/post';
import { Posts } from '@/app/_types/posts';
import BaseRepository from './BaseRepository';

export default class PostRepository implements BaseRepository {
  constructor() {
    console.log('PostRepository constructor');
  }

  async store(post: Post): Promise<Post> {
    await new Promise(resolve => setTimeout(resolve, 500));
    return post;
  }

  async update(post: Post): Promise<Post> {
    await new Promise(resolve => setTimeout(resolve, 500));
    return post;
  }

  async delete(id: string): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  async find(id: string): Promise<Post> {
    await new Promise(resolve => setTimeout(resolve, 500));
    return {
      "id": 1,
      "user_id": 1,
      "message": "今日もいい天気ですね。",
      "created_at": new Date(),
    };
  }

  async getAll(): Promise<Posts> {
    await new Promise(resolve => setTimeout(resolve, 500));
    return {
      data: [
        {
          "id": 1,
          "user_id": 1,
          "message": "今日もいい天気ですね。",
          "created_at": new Date(),
        },
        {
          "id": 2,
          "user_id": 1,
          "message": "Post 2",
          "created_at": new Date(),
        }
      ]
    };
  }
}