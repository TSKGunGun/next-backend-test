import { Box, TextField, Typography } from "@mui/material";
import { useRef } from "react";
import Button from "@mui/material/Button";
import { store } from "../_serviceAction/PostServiceAction";
import { getMe } from "../_serviceAction/AuthServiceAction";

interface NewPostProps {
  readonly reload: () => void;
}

export default function NewPost(props : NewPostProps) {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handlePost = async () => {
    if(textAreaRef.current === null) return;
    const user = await getMe();
    if(user === null) return;

    const data = {
      user: user,
      message: textAreaRef.current.value
    }

    await store(data);
    textAreaRef.current.value = "";
    props.reload();
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