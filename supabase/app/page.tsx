'use client'

import { Typography } from "@mui/material";
import { getAll } from "./_serviceAction/PostServiceAction";
import PostCards from "./_components/postCards";
import { Posts } from "./_types/posts";
import Box from "@mui/material/Box";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import NewPost from "./_components/newPost";

export default function Home() {
  const router = useRouter();
  const [posts, setPosts] = useState<Posts>();
  const [reload, setReload] = useState<boolean>(false);

  useEffect(() => {
    const loading = async () => {
      setPosts(await getAll());
    }

    loading();
    setReload(false)
  }, [router, reload]);

  function pageReload() {
    setReload(true);
  }

  return (
    <div className="container">
      <div style={{ textAlign: "center", width: "100%", marginTop: "80px"}}>
        <Typography variant="h3">SampleApp</Typography>
        <Typography variant="body1">APIサーバを使わずNext.jsのみで実行されるサンプルアプリです。</Typography>
        <Typography variant="body1"></Typography>
      </div>
      <Box sx = {{ maxWidth: '700px', margin: '0 auto', marginTop: '20px'}}>
        <NewPost reload={pageReload} />
      </Box>
      <PostCards posts={posts} />
    </div>
  )
}
