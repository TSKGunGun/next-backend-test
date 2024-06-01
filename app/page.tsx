'use client'

import { Typography } from "@mui/material";
import PostService from "./_service/PostService";
import PostCard from "./_components/postcard";
import { Post } from "./_types/post";
import { Posts } from "./_types/posts";
import Box from "@mui/material/Box";
import AuthService from "./_service/AuthService";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import NewPost from "./_components/new_post";

export default function Home() {
  const router = useRouter();
  const [posts, setPosts] = useState<Posts>();
  const postService = new PostService();
  const authService = new AuthService();

  useEffect(() => {
    const loading = async () => {
      if( ! await authService.isLogin()) {
        console.log('ログインしていません');
        router.push('/login');
      }

      setPosts(await postService.getAll());
    }

    loading();
  }, [router]);


  return (
    <div className="container">
      <div style={{ textAlign: "center", width: "100%", marginTop: "80px"}}>
        <Typography variant="h3">SampleApp</Typography>
        <Typography variant="body1">APIサーバを使わずNext.jsのみで実行されるサンプルアプリです。</Typography>
        <Typography variant="body1"></Typography>
      </div>
      <Box sx = {{ maxWidth: '700px', margin: '0 auto', marginTop: '20px'}}>
        <NewPost />
      </Box>
      
      <Box sx={{display:"flex", flexDirection:"column", alignItems: "center", gap:"20px", marginTop:"50px"}}>
        <Typography variant="h5">みんなのポスト</Typography>
          {posts?.data.map( (post: Post) => {
            return <PostCard key={post.id} post={post} />
          })}
      </Box>
    </div>
  )
}
