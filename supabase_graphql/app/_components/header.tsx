import { AppBar, Typography } from "@mui/material";
import HeaderButtonGroup from "./headerButtonGroup";
import { isLogin } from "../_serviceAction/AuthServiceAction";

export default async function Header() {
  const isLogined = await isLogin();

  return (
    <AppBar
      position="fixed"
      color="inherit"
      sx={{
        paddingLeft: "10px",
        paddingTop: "5px",
        paddingBottom: "5px",
        paddingRight: "10px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h5">SampleApp</Typography>
        <div style={{ display: "flex", gap: "10px" }}>
          <HeaderButtonGroup isLogin={isLogined} />
        </div>
      </div>
    </AppBar>
  );
}
