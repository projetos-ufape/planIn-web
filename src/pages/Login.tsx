import React, { useState } from "react";
import { TextField, Box, Typography, Link } from "@mui/material";
import LogoHeader from "../components/LogoHeader/LogoHeader";
import { COLORS, FONT } from "../utils/theme";
import LoginBtn from "../components/LoginBtn";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailRegistered] = useState(true);

  const handleEmailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!emailRegistered) {
      navigate("/register", { state: { email } });
    }
    setShowPassword(true);
  };

  const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    setEmail("");
    setPassword("");
    setShowPassword(false);
  };

  return (
    <Box
      minHeight="100vh"
      minWidth="100vw"
      sx={{
        backgroundColor: COLORS.light.background,
      }}
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
            sx={{ color: COLORS.light.text.primary, marginBottom: "5px" }}
          >
            Seja bem-vindo(a)
          </Typography>
          <Typography
            fontSize={`${FONT.body.lg.size}px`}
            lineHeight={`${FONT.body.lg.lineHeight}px`}
            fontFamily={FONT.body.fontFamily}
            sx={{
              color: COLORS.light.text.secondary,
              fontWeight: 400,
              marginTop: 0,
            }}
          >
            {!showPassword
              ? "Para começar, informe seu e-mail"
              : "Agora sua senha de acesso"}
          </Typography>
        </Box>
        <form onSubmit={showPassword ? handleLoginSubmit : handleEmailSubmit}>
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Box>
              <TextField
                type="email"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                sx={{
                  borderRadius: "4px",
                  width: "350px",
                }}
              />
            </Box>
            {showPassword && (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                }}
              >
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
                <Link
                  href=""
                  sx={{
                    fontFamily: FONT.body.fontFamily,
                    color: COLORS.light.primary,
                    textDecoration: "none",
                    marginTop: "5px",
                  }}
                >
                  Esqueceu a senha ?
                </Link>
              </Box>
            )}
            <LoginBtn>{showPassword ? "Entrar" : "Continuar"}</LoginBtn>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
