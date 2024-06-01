import UserRepository from "@/app/_repository/UserRepostiroy";
import { User } from "@/app/_types/user";

export default class UserService {
  private user: UserRepository;

  constructor() {
    this.user = new UserRepository();
  }

  async update(user: User): Promise<User> {
    return this.user.update(user);
  }

  async delete(id: string): Promise<void> {
    return this.user.delete(id);
  }

  async find(id: string): Promise<User> {
    return this.user.find(id);
  }

  async getAll(): Promise<User[]> {
    return this.user.getAll();
  }
}