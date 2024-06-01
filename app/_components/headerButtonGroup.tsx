import { Button } from "@mui/material"
import { useRouter } from "next/navigation"
import AuthService from "../_service/AuthService"

interface HeaderButtonGroupProps {
    isLogin: boolean;
}

export default function HeaderButtonGroup({ isLogin } : HeaderButtonGroupProps) {
  const router = useRouter();
  const authService = new AuthService();

  const loginButtonHandle = () => {
    router.push('/login');
  }

  const registerButtonHandle = () => {
    router.push('/register');
  }

  const logoutButtonHandle = () => {
    authService.logout();
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