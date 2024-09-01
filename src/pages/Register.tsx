import { Box, Typography, TextField, useTheme } from "@mui/material";
import { useLocation } from "react-router-dom";
import React from "react";
import { useState } from "react";
import { FONT } from "../utils/theme";
import LogoHeader from "../components/LogoHeader/LogoHeader";
import LoginBtn from "../components/LoginBtn";

const Register = () => {
  const { palette } = useTheme();
  const location = useLocation();
  const emailFromLogin = location.state.email;
  const [password, setPassword] = useState("");

  const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <Box
        minHeight="100vh"
        minWidth="100vw"
      >
        <LogoHeader />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "65vh",
          }}
        >
          <Box textAlign="center" marginBottom="15px">
            <Typography
              fontSize={`${FONT.headline.sm.size}px`}
              lineHeight={`${FONT.headline.sm.lineHeigt}px`}
              variant="h1"
              fontFamily={FONT.headline.fontFamily}
              sx={{ color: palette.text.primary, marginBottom: "5px" }}
            >
              Novo Cadastro
            </Typography>
            <Typography
              fontSize={`${FONT.body.lg.size}px`}
              lineHeight={`${FONT.body.lg.lineHeight}px`}
              fontFamily={FONT.body.fontFamily}
              sx={{
                color: palette.text.secondary,
                fontWeight: 400,
                marginTop: 0,
              }}
            >
              Seu e-mail ainda não está cadastrado
            </Typography>
          </Box>
          <form onSubmit={handleLoginSubmit}>
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                gap: "15px",
              }}
            >
              <Box>
                <TextField
                  label="email"
                  type="email"
                  value={emailFromLogin}
                  aria-readonly
                  sx={{
                    width: "350px",
                    marginTop: "5px",
                  }}
                />
              </Box>
              <Box>
                <TextField
                  label="senha"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  sx={{
                    width: "350px",
                    marginTop: "5px",
                  }}
                />
              </Box>
              <LoginBtn>Cadastre-se</LoginBtn>
            </Box>
          </form>
        </Box>
      </Box>
    </div>
  );
};

export default Register;
