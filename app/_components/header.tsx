'use client'

import { ReactNode, useEffect, useState } from "react"
import AuthService from "../_service/AuthService"
import { AppBar, Typography } from "@mui/material"
import HeaderButtonGroup from "./headerButtonGroup"

export default function Header(): ReactNode {
  const authService = new AuthService();
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loginCheck = async () => {
      setIsLogin(await authService.isLogin());
      setIsLoading(false);
    }
    loginCheck();
  }, []);

  return (
    <AppBar position="fixed" color="inherit" sx={{"paddingLeft":"10px", "paddingTop":"5px", "paddingBottom":"5px", "paddingRight":"10px"}} >
      <div style={{"display":"flex", "justifyContent":"space-between"}}>
        <Typography variant="h5">SampleApp</Typography>
        <div style={{"display" : "flex", "gap": "10px"}}>
          { !isLoading ?
            <HeaderButtonGroup isLogin={isLogin} />
            : null
          }      
        </div>
      </div>
    </AppBar>
  )
}