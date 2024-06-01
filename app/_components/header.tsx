'use client'

import { ReactNode, useEffect, useState } from "react"
import AuthService from "../_service/AuthService"
import { AppBar, Button, Typography } from "@mui/material"
import { useRouter } from "next/navigation"

export default function Header(): ReactNode {
  const router = useRouter();
  const authService = new AuthService();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const loginCheck = async () => {
      setIsLogin(await authService.isLogin());
    }

    loginCheck();
  }, []);

  const loginButtonHandle = () => {
    router.push('/login');
  }

  const registerButtonHandle = () => {
    router.push('/register');
  }

  const logoutButtonHandle = () => {
    authService.logout();
  }

  return (
    <AppBar position="fixed" color="inherit" sx={{"paddingLeft":"10px", "paddingTop":"5px", "paddingBottom":"5px", "paddingRight":"10px"}} >
      <div style={{"display":"flex", "justifyContent":"space-between"}}>
        <Typography variant="h5">SampleApp</Typography>
        <div style={{"display" : "flex", "gap": "10px"}}>
          { isLogin ?
            <Button variant="contained" color="primary" onClick={logoutButtonHandle}>ログアウト</Button>
            :
            <>
              <Button variant="contained" color="primary" onClick={loginButtonHandle}>ログイン</Button>
              <Button variant="contained" color="secondary" onClick={registerButtonHandle}>新規登録</Button>
            </>
          }      
        </div>
      </div>
    </AppBar>
  )
}