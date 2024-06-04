"use server"

import { EmailOtpType } from "@supabase/supabase-js";
import {login as loginAct, logout as logoutAct, islogin as isLoginAct,  register as registerAct, confirm as confirmAct, getMe as getMeAct } from "../_repository/AuthRepository";
import { User } from "../_types/user";

export async function login(email:string, password:string): Promise<User|null> {    
    return await loginAct(email, password);
}
  
export async function logout(): Promise<void> {
  return await logoutAct();
}
  
export async function isLogin(): Promise<boolean> {
  return await isLoginAct();
}
  
export async function register(email: string, password: string): Promise<void> {
  return await registerAct(email, password);
}

export async function confirm(type: EmailOtpType, token:string): Promise<void> {
  return await confirmAct(type, token);
}

export async function getMe(): Promise<User|null> {
  return getMeAct();
}