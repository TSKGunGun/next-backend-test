"use client"

import { Box, Button, TextField, Typography } from "@mui/material";
import { useRef } from "react";
import { register } from "../_serviceAction/AuthServiceAction";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Register() {
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const password_confirm = useRef<HTMLInputElement>(null);
  const Router = useRouter();

  const registerHandle = async () => {
    if(email.current === null || password.current === null || password_confirm.current === null) return;
    if(password.current.value !== password_confirm.current.value) return;

    await register(email.current.value, password.current.value);

    Router.push('/');
  }

  return (
    <div style={{ background: "#eee", height:"100vh",width: "100%",display:"flex", textAlign:"center", justifyContent:"center", alignItems:"center"}}>
    <Box width={400} sx={{ background: "white", display: "flex", flexDirection: "column", padding:"20px", justifyContent:"center", textAlign:"center", border: "1px solid #eee", "borderRadius" : "10px"}}>
      <h1>新規登録</h1>
      <TextField id="email" label="メールアドレス" variant="outlined" margin="normal" inputRef={email} required/>
      <TextField id="password" label="パスワード" variant="outlined" type="password" margin="normal" inputRef={password} required/>
      <TextField id="password_confirm" label="パスワード_再入力" variant="outlined" type="password" margin="normal" inputRef={password_confirm} required />
      <Button variant="contained" color="primary" sx={{ "marginTop" : "40px", "marginBottom": "10px"}} onClick={registerHandle}>新規登録</Button>
      <Typography variant="body2" color={"darkgray"} marginTop={3}>ログインは
        <Link href="/login">こちら</Link>から</Typography>
    </Box>
  </div>
  );
}