import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import LogoHeader from "../../components/LogoHeader/LogoHeader";
import styles from "./Login.module.css";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
    <div>
      <div className={styles.container}>
        <LogoHeader />
        <section className={styles.content}>
          <h1 className={styles.title}>Seja bem-vindo(a)</h1>
          <h3 className={styles.subtitle}>{!showPassword? "Para começar, informe seu e-mail" : "Agora sua senha de acesso"}</h3>
          <form onSubmit={showPassword ? handleLoginSubmit : handleEmailSubmit}>
            <div className={styles.inputs}>
              <div className={styles.input}>
                <TextField
                  label="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  sx={{
                    borderRadius: "4px",
                    width: "350px",
                  }}
                />
              </div>
              {showPassword && (
                <div className={styles.inputContainer}>
                  <div className={styles.input}>
                    <TextField
                      label="senha"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      sx={{
                        width: "350px",
                        marginTop: "5px",
                      }}
                    />
                  </div>
                  <a className={styles.forgotPassword} href="#">
                    Equeceu sua senha ?
                  </a>
                </div>
              )}
              <Button
                type="submit"
                sx={{
                  borderRadius: "100px",
                  backgroundColor: "#904A46",
                  color: "white",
                  fontSize: "14px",
                  textAlign: "center",
                  padding: "10px",
                  width: "150px",
                  marginTop: "15px",
                  transition: "0.4s",
                  lineHeight: "20px",
                  "&:hover": {
                    backgroundColor: "#7d423e",
                  },
                }}
              >
                {showPassword ? "Entrar" : "Continuar"}
              </Button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Login;
