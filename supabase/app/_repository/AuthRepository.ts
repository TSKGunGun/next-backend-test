import { User } from '@/app/_types/user';
import { createClient } from '@/app/_utils/supabase/client';
import type { AuthResponse, SignInWithPasswordCredentials, SupabaseClient } from '@supabase/supabase-js';

export default class AuthRepository {
  private client: SupabaseClient;
  
  constructor() {
    this.client = createClient();
    console.log('AuthRepository constructor');
  }

  async login(email:string, password:string): Promise<User|null> {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const credentials: SignInWithPasswordCredentials = {
      email: email,
      password: password
    };

    const {data, error}= await this.client.auth.signInWithPassword(credentials);
    
    if( error ) throw new Error(error.message);

    return {
      uid: data?.user.id,
      name: 'test',
      email: data?.user.email as string,
      icon_url: 'https://picsum.photos/200'
    };
  }

  async islogin(): Promise<boolean> {
    const { error } = await this.client.auth.getUser();
    if( error ) return false;

    return true;
  }

  async logout(): Promise<void>{
    await this.client.auth.signOut();
  }

  async register(email: string, password: string): Promise<void> {
    const {error} = await this.client.auth.signUp({
      email: email,
      password: password
    });

    if (error) throw new Error(error.message);
  }

  async getMe(): Promise<User|null> {
    const { data, error } = await this.client.auth.getUser();
    
    if( error ) return null;
    
    return {
      uid: data?.user.id,
      name: 'test',
      email: data?.user.email as string,
      icon_url: 'https://picsum.photos/200'
    }
  }
}