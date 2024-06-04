"use server"

import { User } from '@/app/_types/user';
import { createClient } from '@/app/_utils/supabase/server';
import type { EmailOtpType, SignInWithPasswordCredentials } from '@supabase/supabase-js';

function getClient() {
  return createClient();
} 
  
export async function login(email:string, password:string): Promise<User|null> {
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const credentials: SignInWithPasswordCredentials = {
    email: email,
    password: password
  };

  const {data, error}= await getClient().auth.signInWithPassword(credentials);
  
  if( error ) throw new Error(error.message);

  return {
    uid: data?.user.id,
    name: 'test',
    email: data?.user.email as string,
    icon_url: 'https://picsum.photos/200'
  };
}

export async function islogin(): Promise<boolean> {
  const { error } = await getClient().auth.getUser();
  if( error ) return false;

  return true;
}

export async function logout(): Promise<void>{
  await getClient().auth.signOut();
}

export async function register(email: string, password: string): Promise<void> {
  const {error} = await getClient().auth.signUp({
    email: email,
    password: password
  });

  if (error) throw new Error(error.message);
}

export async function confirm(type :EmailOtpType, token_hash:string): Promise<void> {
  const {error} = await getClient().auth.verifyOtp({type, token_hash});

  if (error) throw new Error(error.message);
}

export async function getMe(): Promise<User|null> {
  const { data, error } = await getClient().auth.getUser();
    
  if( error ) return null;
    
  return {
    uid: data?.user.id,
    name: 'test',
    email: data?.user.email as string,
    icon_url: 'https://picsum.photos/200'
  }
}