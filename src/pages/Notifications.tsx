import { Box, Button, Container, Typography, useTheme } from "@mui/material";
import { NavBar } from "../components/NavBar";
import { FONT } from "../utils/theme";
import { Notification } from "../components/Notification";
import { useNavigate } from "react-router-dom";
import { useNotification } from "../hooks/useNotification";

export function Notifications() {
  const { palette } = useTheme();
  const navigate = useNavigate();

  const { notifications, getNotifications } = useNotification();

  return (
    <Box flexDirection={"column"}  width={"100%"}>
      <NavBar />
      <Container>
        <Box display="flex" flexDirection="column" alignItems="center" gap={2} marginBottom={2}>
            <Box display="flex" justifyContent="space-between" alignItems="center" marginTop={2} marginBottom={1} width="100%" maxWidth={552}>
              <Typography fontSize={FONT.title.lg.size} color={palette.text.primary}>
                Lembretes e notificações
              </Typography>
              <Button variant="outlined" onClick={() => navigate(-1)}>Voltar</Button>
            </Box>
            {notifications?.map((notification, index) => (
              <Notification
                key={index}
                data={notification}
                onDelete={() => getNotifications()}
                onMarkAsRead={() => getNotifications()}
              />
            ))}
        </Box>
      </Container>
    </Box>
  );
}
