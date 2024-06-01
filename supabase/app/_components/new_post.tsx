import { Box, TextField, Typography } from "@mui/material";
import { useRef } from "react";
import Button from "@mui/material/Button";
import PostService from "../_service/PostService";
import AuthService from "../_service/AuthService";

export default function NewPost() {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const postService = new PostService();
  const authService = new AuthService();

  const handlePost = async () => {
    if(textAreaRef.current === null) return;
    const user = await authService.getMe();
    if(user === null) return;

    postService.store(user, textAreaRef.current.value);
  }

  return (
    <Box sx={{border: '1px solid #b0c4de', padding: "10px", borderRadius: "10px" }}>
      <Typography variant="h6" fontWeight={800} color={"#4169e1"}>いまなにしてる？</Typography>
      <TextField minRows={5} placeholder="input new post.." inputRef={textAreaRef} required multiline fullWidth/>
      <Box sx={{display: 'flex', justifyContent:'flex-end', marginTop:'10px'}}>
        <Button variant="contained" onClick={handlePost}>送信</Button>
      </Box>
    </Box>
  );
}