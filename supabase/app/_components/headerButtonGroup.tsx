"use client"

import { Button } from "@mui/material"
import { logout } from "@/app/_serviceAction/AuthServiceAction"
import { useRouter } from "next/navigation"

interface HeaderButtonGroupProps {
  readonly isLogin: boolean;
}

export default function HeaderButtonGroup({ isLogin } : HeaderButtonGroupProps) {
  const router = useRouter();
  const loginButtonHandle = () => {
    router.push('/login');
  }

  const registerButtonHandle = () => {
    router.push('/register');
  }

  const logoutButtonHandle = async () => {
    await logout();
    router.push('/login');
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