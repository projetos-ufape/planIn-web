import React, { useState } from "react";
import { Input, Button } from "@mui/material";
import Logo from "../../assets/Planit.svg";
import styles from "./LoginComponent.module.css";

const LoginComponent: React.FC = () => {
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
        <section className={styles.header}>
          <img src={Logo} alt="Logo" />
        </section>
        <section className={styles.content}>
          <h1 className={styles.title}>Seja bem-vindo(a)</h1>
          <h3 className={styles.subtitle}>Para começar, informe seu e-mail</h3>
          <form onSubmit={showPassword ? handleLoginSubmit : handleEmailSubmit}>
            <div className={styles.inputs}>
              <div className={styles.input}>
                <Input
                  value={email}
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  sx={{
                    border: "2px solid #904A46",
                    borderRadius: "4px",
                    padding: "6px",
                    width: "300px",
                  }}
                />
              </div>
              {showPassword && (
                <div className={styles.inputContainer}>
                  <div className={styles.input}>
                    <Input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      sx={{
                        border: "2px solid #904A46",
                        padding: "6px",
                        width: "300px",
                        marginTop: "5px",
                      }}
                    />
                  </div>
                  <a className={styles.forgotPassword} href="">Equeceu sua senha ?</a>
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
                  padding: "14px",
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

export default LoginComponent;
