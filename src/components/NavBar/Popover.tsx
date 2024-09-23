import { NotificationsNone } from "@mui/icons-material";
import {
  Badge,
  Box,
  Button,
  Divider,
  IconButton,
  Popover as PopoverMui,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { Notification } from "./Notification";
import { FONT } from "../../utils/theme";
import { useNavigate } from "react-router-dom";
import { useNotification } from "../../hooks/useNotification";

export function Popover() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const { palette } = useTheme();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  const { notifications } = useNotification();

  return (
    <>
      <IconButton aria-label="cart" onClick={handleClick}>
        <Badge color="secondary" variant="dot">
          <NotificationsNone />
        </Badge>
      </IconButton>
      <PopoverMui
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "center",
          horizontal: 20,
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Box border={1} borderColor={palette.secondary.dark} borderRadius={2}>
          {notifications?.map((n, index) => {
            return (
              <Box key={index} >
                <Notification data={n}/>
                <Divider
                  variant="fullWidth"
                  sx={{ borderColor: palette.secondary.dark }}
                />
              </Box>
            );
          })}
          <Box
            display="flex"
            justifyContent="flex-end"
            paddingBottom={0.5}
            paddingTop={0.5}
            paddingRight={1}
          >
            <Button variant="text" onClick={() => {
              navigate("/notifications");
            }}>
              <Typography
                textTransform="none"
                fontSize={FONT.label.lg.size}
                fontWeight={FONT.label.lg.weight}
                letterSpacing={FONT.label.lg.letter}
              >
                Ver todos
              </Typography>
            </Button>
          </Box>
        </Box>
      </PopoverMui>
    </>
  );
}
