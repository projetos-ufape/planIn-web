import { Box, Button, Container, Typography, useTheme } from "@mui/material";
import { NavBar } from "../components/NavBar";
import { FONT } from "../utils/theme";
import { Notification } from "../components/Notification";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Notifications() {
  const { palette } = useTheme();
  const navigate = useNavigate();

  const [notifications, setNotifications] = useState([
    { title: "Conversa sobre o projeto", status: "unread", dateTimeStart: new Date("2024-08-16 13:30:00"), dateTimeEnd: new Date("2024-08-16 14:30:00") },
    { title: "Entrevista", status: "unread", dateTimeStart: new Date("2024-08-16 10:00:00"), dateTimeEnd: new Date("2024-08-16 10:30:00") },
    { title: "Monitoria PAA", status: "read", dateTimeStart: new Date("2024-08-13 13:30:00"), dateTimeEnd: new Date("2024-08-16 14:30:00") },
    { title: "Entrega de atividade", status: "read", dateTimeStart: new Date("2024-08-13 13:30:00"), dateTimeEnd: new Date("2024-08-13 14:30:00") },
    { title: "Prova", status: "read", dateTimeStart: new Date("2024-08-13 13:30:00"), dateTimeEnd: new Date("2024-08-13 14:30:00") }
  ]);

  function markAsRead(index: any) {
    const updatedNotifications = notifications.map((notification, i) => {
      if (i === index) {
        return { ...notification, status: "read" };
      }
      return notification;
    });

    setNotifications(updatedNotifications);
  }

  const handleDelete = (indexToRemove: any) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((_, index) => index !== indexToRemove)
    );
  };

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
            {notifications.map((notification, index) => (
              <Notification
                key={index}
                data={notification}
                onDelete={() => handleDelete(index)}
                onMarkAsRead={() => markAsRead(index)}
              />
            ))}
        </Box>
      </Container>
    </Box>
  );
}
