import AuthRepository from "../_repository/AuthRepository";
import { User } from "../_types/user";

const auth = new AuthRepository();

function login(email:string, password:string): User|null {
  let user=null;
  try{
    user = auth.login(email, password);
  } catch(e) {
    console.error(e);
    return null;
  }

  return user;
}

function logout(): void {
  auth.logout();
}

function isLogin(): boolean {
  return auth.islogin();
}

async function register(email: string, password: string): Promise<User> {
  return await auth.register(email, password);
}

export { login, logout, isLogin, register }