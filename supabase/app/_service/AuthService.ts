import { EmailOtpType, VerifyEmailOtpParams, VerifyOtpParams } from "@supabase/supabase-js";
import AuthRepository from "../_repository/AuthRepository";
import { User } from "../_types/user";


export default class AuthService {
  private auth: AuthRepository;

  constructor() {
    this.auth = new AuthRepository();
  }

  async login(email:string, password:string): Promise<User|null> {
    let user=null;
    try{
      user = await this.auth.login(email, password);
    } catch(e) {
      console.error(e);
      return null;
    }
  
    return user;
  }
  
  async logout(): Promise<void> {
    return await this.auth.logout();
  }
  
  async isLogin(): Promise<boolean> {
    return await this.auth.islogin();
  }
  
  async register(email: string, password: string): Promise<void> {
    return await this.auth.register(email, password);
  }

  async confirm(type: EmailOtpType, token:string): Promise<void> {
    return await this.auth.confirm(type, token);
  }

  async getMe(): Promise<User|null> {
    return this.auth.getMe();
  }
  
}