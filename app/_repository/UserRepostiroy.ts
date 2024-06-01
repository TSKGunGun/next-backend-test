import BaseRepository from './BaseRepository';
import { User } from '../_types/user';

export default class UserRepository implements BaseRepository {
  constructor() {
    console.log('UserRepository constructor');
  }

  async update(user: User): Promise<User> {
    await new Promise(resolve => setTimeout(resolve, 500));
    return user;
  }

  async delete(id: string): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  async find(id: string): Promise<User> {
    await new Promise(resolve => setTimeout(resolve, 500));
    return {
      "uid": "1",
      "name": "田中太郎",
      "email": "taro.tanaka@example.com"
    };
  }

  async getAll(): Promise<User[]> {
    await new Promise(resolve => setTimeout(resolve, 500));
    return [
      {
        "uid": "1",
        "name": "田中太郎",
        "email": "taro.tanaka@example.com",
      },
      {
        "uid": "2",
        "name": "山田花子",
        "email": "hanako.yamada@example.com",
      }
    ];
  }
}