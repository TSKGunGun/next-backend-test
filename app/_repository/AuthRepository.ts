import { User } from '@/app/_types/user';

export default class AuthRepository {
  constructor() {
    console.log('AuthRepository constructor');
  }

  login(email:string, password:string): User {
    return {
      uid: '123',
      email: 'test@example.com'
    };
  }

  islogin(): boolean {
    return true;
  }

  logout(): void{
    return;
  }

  register(email: string, password: string): User {
    return {
      uid: '123',
      email: 'test@example.com'
    };
  }
}