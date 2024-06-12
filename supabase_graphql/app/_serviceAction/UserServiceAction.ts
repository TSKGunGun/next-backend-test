import { User } from "../_types/user";
import { createDatabaseClient } from "../_utils/supabase/database";

function getDB() {
  return createDatabaseClient();
}

export async function find(id: string): Promise<User> {
  const { data, error } = await getDB()
    .from("user_info")
    .select("*")
    .eq("uid", id);

  if (error) {
    throw new Error(error.message);
  }

  if (data.length !== 1) {
    throw new Error("正常にユーザーデータを取得できませんでした。");
  }

  const userInfo = data[0];

  let user: User = {
    uid: userInfo.uid,
    name: userInfo.name!,
    email: "",
    icon_url: userInfo.icon_url,
  };

  return user;
}

export async function getAll(): Promise<User[]> {
  const db = getDB();
  const { data, error } = await db.from("user_info").select("*");

  if (error) {
    throw new Error(error.message);
  }

  let users: User[] = data.map((item) => {
    let user = {
      uid: item.uid,
      name: item.name,
      email: "",
      icon_url: item.icon_url,
    } as User;
    return user;
  });

  return users;
}
