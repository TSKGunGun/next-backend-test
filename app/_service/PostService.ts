import { Post } from '@/app/_types/post';
import PostRepository from '../_repository/PostRepository';

const postRepository = new PostRepository();

export function store(post: Post) {
  return postRepository.store(post);
}

export function update(post: Post) {
  return postRepository.update(post);
}

export function remove(id: string) {
  return postRepository.delete(id);
}

export function find(id: string) {
  return postRepository.find(id);
}

export function getAll() {
  return postRepository.getAll();
}