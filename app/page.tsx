'use client'

import { Typography } from "@mui/material";
import { getAll } from "./_service/PostService";
import PostCard from "./_components/PostCard";
import { Post } from "./_types/post";
import { Posts } from "./_types/posts";
import Box from "@mui/material/Box";
import { isLogin } from "./_service/AuthService";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [posts, setPosts] = useState<Posts>();

  useEffect(() => {
    if(!isLogin()) {
      console.log('ログインしていません');
      router.push('/login');
    }

    const loadPosts = async () => {
      setPosts(await getAll());
    }

    loadPosts();
  }, [router]);


  return (
    <div className="container">
      <div style={{ textAlign: "center", width: "100%", marginTop: "80px"}}>
        <Typography variant="h3">SampleApp On Firebase</Typography>
        <Typography variant="body1">APIサーバを使わずFirebaseのみで実行されるサンプルアプリです。</Typography>
        <Typography variant="body1"></Typography>
      </div>
      <Box sx={{display:"flex", flexDirection:"column", alignItems: "center", gap:"20px", marginTop:"50px"}}>
        {posts?.data.map( (post: Post) => {
          return <PostCard key={post.id} post={post} />})}
      </Box>
    </div>
  )
}
