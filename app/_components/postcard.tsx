import { Post } from "@/app/_types/post";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { Avatar, Typography } from "@mui/material";
import UserService from "../_service/UserService";
import { useState, useEffect } from "react";
import { User } from "@/app/_types/user";

type PostCardProps = {
  readonly post: Post
}

export default function PostCard( {post} : PostCardProps) {
  const userService = new UserService();
  const [user, setUser] = useState<User>({} as User);

  useEffect(() => {
    const loadUser = async () => {
      setUser(await userService.find(post.uid));
      console.log(user);
    }

    loadUser();
  }, []);

  return (
    <Box sx={{ width: "700px", border: '1px solid #b0c4de', padding: '14px', borderRadius: '10px'}}>
      <Box sx={{display: "flex", flexDirection:"row", gap:"10px" }}>
        <Box sx={{display: "flex", alignItems:"center"}} >
          <Avatar src={user.icon_url as string} />
        </Box>
        <Box sx={{width:'100%'}}>
          <Box>
          <Typography variant="body1" fontWeight={700} fontSize={14} marginBottom="10px">{user.name}</Typography>
          <Typography variant="body1">{post.message}</Typography>
          </Box>
          <Box sx={{ textAlign: "right"}}>
            <Typography variant="caption">{post.created_at.toLocaleDateString('ja-JP')}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}