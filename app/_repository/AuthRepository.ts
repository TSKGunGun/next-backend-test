import { User } from '@/app/_types/user';

export default class AuthRepository {
  constructor() {
    console.log('AuthRepository constructor');
  }

  async login(email:string, password:string): Promise<User|null> {
    await new Promise(resolve => setTimeout(resolve, 500));
    return {
      uid: '123',
      email: 'test@example.com'
    };
  }

  async islogin(): Promise<boolean> {
    await new Promise(resolve => setTimeout(resolve, 500));
    return false;
  }

  async logout(): Promise<void>{
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  async register(email: string, password: string): Promise<User> {
    await new Promise(resolve => setTimeout(resolve, 100));
    return {
      uid: '123',
      email: 'test@example.com'
    };
  }
}