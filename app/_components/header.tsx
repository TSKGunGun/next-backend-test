import { ReactNode } from "react"
import { AppBar, Button, Typography } from "@mui/material"

export default function Header(): ReactNode {
  return (
    <AppBar position="fixed" color="inherit" sx={{"paddingLeft":"10px", "paddingTop":"5px", "paddingBottom":"5px", "paddingRight":"10px"}} >
      <div style={{"display":"flex", "justifyContent":"space-between"}}>
        <Typography variant="h5">SampleApp on Firebase</Typography>
        <div style={{"display" : "flex", "gap": "10px"}}>
          <Button variant="contained">ログイン</Button>
          <Button variant="contained" color="secondary">新規登録</Button>
        </div>
      </div>
    </AppBar>
  )
}