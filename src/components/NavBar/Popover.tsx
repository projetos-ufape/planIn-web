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
import { Notification, NotificationProps } from "./Notification";
import { FONT } from "../../utils/theme";

export function Popover() {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const { palette } = useTheme();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  //TODO: Request notifications
  const notifications: NotificationProps[] = [
    {
      title: "Conversa a respeito do projeto",
      dateTimeStart: new Date("2024-08-20 12:30:00"),
    },
    {
      title: "Entrevista",
      dateTimeStart: new Date("2024-08-21 14:30:00"),
      dateTimeEnd: new Date("2024-08-21 16:30:00"),
    },
  ];

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
          {notifications.map((n) => {
            return (
              <>
                <Notification data={n} />
                <Divider
                  variant="fullWidth"
                  sx={{ borderColor: palette.secondary.dark }}
                />
              </>
            );
          })}
          <Box
            display="flex"
            justifyContent="flex-end"
            paddingBottom={0.5}
            paddingTop={0.5}
            paddingRight={1}
          >
            <Button variant="text">
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
