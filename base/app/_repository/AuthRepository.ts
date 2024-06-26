import { User } from '@/app/_types/user';

export default class AuthRepository {
  constructor() {
    console.log('AuthRepository constructor');
  }

  async login(email:string, password:string): Promise<User|null> {
    await new Promise(resolve => setTimeout(resolve, 500));
    return {
      uid: '123',
      name: 'test',
      email: 'test@example.com',
      icon_url: null
    };
  }

  async islogin(): Promise<boolean> {
    await new Promise(resolve => setTimeout(resolve, 500));
    return true;
  }

  async logout(): Promise<void>{
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  async register(email: string, password: string): Promise<User> {
    await new Promise(resolve => setTimeout(resolve, 100));
    return {
      uid: '123',
      name: 'test',
      email: 'test@example.com',
      icon_url: null
    };
  }

  async getMe(): Promise<User|null> {
    await new Promise(resolve => setTimeout(resolve, 100));
    return {
      uid: '123',
      name: 'test',
      email: '',
      icon_url: 'https://picsum.photos/200'
    }
  }
}