import { Button } from "@mui/material";
import { COLORS, FONT } from "../utils/theme";

const LoginBtn = ({ children }) => {
  return (
    <div>
      <Button
        type="submit"
        sx={{
          borderRadius: "100px",
          backgroundColor: COLORS.light.primary,
          color: COLORS.white,
          fontSize: `${FONT.label.md.size}px`,
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
        {" "}
        {children}
      </Button>
    </div>
  );
};

export default LoginBtn;
