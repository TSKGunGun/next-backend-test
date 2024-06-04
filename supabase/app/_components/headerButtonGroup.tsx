"use client"

import { Button } from "@mui/material"
import { redirect } from "next/navigation"
import { logout } from "@/app/_serviceAction/AuthServiceAction"

interface HeaderButtonGroupProps {
  readonly isLogin: boolean;
}

export default function HeaderButtonGroup({ isLogin } : HeaderButtonGroupProps) {
  const loginButtonHandle = () => {
    redirect('/login');
  }

  const registerButtonHandle = () => {
    redirect('/register');
  }

  const logoutButtonHandle = () => {
    logout();
    redirect('/login');
  }

  if (isLogin) {
    return (
      <Button variant="contained" color="primary" onClick={logoutButtonHandle}>ログアウト</Button>
    )
  } else {
    return (
      <>
        <Button variant="contained" color="primary" onClick={loginButtonHandle}>ログイン</Button>
        <Button variant="contained" color="secondary" onClick={registerButtonHandle}>新規登録</Button>
      </>
    )
  }
}