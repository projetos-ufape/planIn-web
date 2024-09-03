import { Button, useTheme } from "@mui/material";
import { FONT } from "../utils/theme";
import React, { ReactNode } from "react";

const LoginBtn: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { palette } = useTheme();
  return (
    <Button
      type="submit"
      sx={{
        borderRadius: "100px",
        backgroundColor: palette.primary.main,
        color: palette.background.default,
        fontSize: `${FONT.label.md.size}px`,
        textAlign: "center",
        padding: "14px",
        width: "150px",
        marginTop: "15px",
        transition: "0.4s",
        lineHeight: "20px",
        "&:hover": {
          backgroundColor: palette.primary.dark,
        },
      }}
    >
      {children}
    </Button>
  );
};

export default LoginBtn;
