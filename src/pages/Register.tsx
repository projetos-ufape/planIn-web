import { Box, Typography, TextField, useTheme } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import React from "react";
import { useState } from "react";
import { FONT } from "../utils/theme";
import LogoHeader from "../components/LogoHeader/LogoHeader";
import LoginBtn from "../components/LoginBtn";
import { useAuth } from "../hooks/useAuth";
import { SignUpProps } from "../types/UserProps";
import { phoneMask, removeMask } from "../utils/mask";

const Register = () => {
  const { palette } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const { signUp, isLoading } = useAuth();
  const emailFromLogin = location?.state?.email;
  const [data, setData] = useState<SignUpProps>({email: emailFromLogin} as SignUpProps);

  async function handleLoginSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const success = await signUp({...data, phone: removeMask(data.phone)});

    if (success) {
      navigate("/login")
    }
  }

  return (
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
              gap: "8px",
            }}
          >
            
              <TextField
                label="Nome"
                type="text"
                value={data.name}
                onChange={(e) => setData({...data, name: e.target.value.trim()})}
                aria-readonly
                sx={{
                  width: "350px",
                  marginTop: "5px",
                }}
              />
              <TextField
                label="Email"
                type="email"
                value={data.email}
                onChange={(e) => setData({...data, email: e.target.value.trim()})}
                aria-readonly
                sx={{
                  width: "350px",
                  marginTop: "5px",
                }}
              />
              <TextField
                label="Telefone"
                type="text"
                value={data.phone}
                onChange={(e) => setData({...data, phone: phoneMask(e.target.value.trim())})}
                aria-readonly
                sx={{
                  width: "350px",
                  marginTop: "5px",
                }}
              />
              <TextField
                label="Senha"
                type="password"
                value={data.password}
                onChange={(e) => setData({...data, password: e.target.value.trim()})}
                required
                sx={{
                  width: "350px",
                  marginTop: "5px",
                }}
              />
            <LoginBtn loading={isLoading}>Cadastre-se</LoginBtn>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Register;
