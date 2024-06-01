'use client'

import { useRef } from "react";
import { Button, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import AuthService from "../_service/AuthService";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const authService = new AuthService();
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const loginHandle = async () => {
    if(email.current === null || password.current === null) return;
    await authService.login(email.current.value, password.current.value);

    router.push('/');
  }

  return (
    <div style={{ background: "#eee", height:"100vh",width: "100%",display:"flex", textAlign:"center", justifyContent:"center", alignItems:"center"}}>
      <Box width={400} sx={{ background: "white", display: "flex", flexDirection: "column", padding:"20px", justifyContent:"center", textAlign:"center", border: "1px solid #eee", "borderRadius" : "10px"}}>
        <h1>ログイン</h1>
        <TextField id="email" label="メールアドレス" variant="outlined" margin="normal" inputRef={email} />
        <TextField id="password" label="パスワード" variant="outlined" type="password" margin="normal" inputRef={password} />
        <Button variant="contained" color="primary" sx={{ "marginTop" : "40px", "marginBottom": "10px"}} onClick={loginHandle}>ログイン</Button>
        <Button variant="contained" color="secondary" >新規登録</Button>
      </Box>
    </div>
  )
}