import { Post } from '@/app/_types/post';
import { Posts } from '@/app/_types/posts';
import PostRepository from '../_repository/PostRepository';
import { User } from '../_types/user';

export default class PostService {
  private repo: PostRepository;

  constructor() {
    this.repo = new PostRepository();
  }


  async store(user:User, message: string) : Promise<Post>{
    const data = {
      user: user,
      message: message
    };
    
    return await this.repo.store(data);
  }
  
  async update(post: Post) : Promise<Post>{
    return await this.repo.update(post);
  }
  
  async remove(id: string) : Promise<void>{
    return await this.repo.delete(id);
  }
  
  async find(id: string) : Promise<Post>{
    return await this.repo.find(id);
  }
  
  async getAll() : Promise<Posts>{
    return await this.repo.getAll();
  }
}

