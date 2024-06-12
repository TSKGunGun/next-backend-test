import { userInfo } from "user";

export interface Post {
  id: number;
  message: string;
  created_at: Date;
  user_info: userInfo;
}
