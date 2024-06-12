"use client";

import { useRef, useState } from "react";
import { Button, TextField, Snackbar, Alert } from "@mui/material";
import Box from "@mui/material/Box";
import { login } from "@/app/_serviceAction/AuthServiceAction";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const [snackOpen, setSnackOpen] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");

  const loginHandle = async () => {
    if (email.current === null || password.current === null) return;

    try {
      await login(email.current.value, password.current.value);
    } catch (error) {
      setSnackMessage("ログインに失敗しました");
      setSnackOpen(true);
      return;
    }

    router.push("/");
  };

  const registerHandle = async () => {
    router.push("/register");
  };

  return (
    <div
      style={{
        background: "#eee",
        height: "100vh",
        width: "100%",
        display: "flex",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        width={400}
        sx={{
          background: "white",
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          justifyContent: "center",
          textAlign: "center",
          border: "1px solid #eee",
          borderRadius: "10px",
        }}
      >
        <h1>ログイン</h1>
        <TextField
          id="email"
          label="メールアドレス"
          variant="outlined"
          margin="normal"
          inputRef={email}
        />
        <TextField
          id="password"
          label="パスワード"
          variant="outlined"
          type="password"
          margin="normal"
          inputRef={password}
        />
        <Button
          variant="contained"
          color="primary"
          sx={{ marginTop: "40px", marginBottom: "10px" }}
          onClick={loginHandle}
        >
          ログイン
        </Button>
        <Button variant="contained" color="secondary" onClick={registerHandle}>
          新規登録
        </Button>
      </Box>
      <Snackbar
        open={snackOpen}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        onClose={() => setSnackOpen(false)}
        message="ログインに失敗しました"
      >
        <Alert
          severity="error"
          variant="filled"
          onClose={() => setSnackOpen(false)}
        >
          {snackMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}
