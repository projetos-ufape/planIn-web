import { Box, Button, Typography, useTheme } from "@mui/material";
import { COLORS, FONT } from "../../utils/theme";
import { formatTime, getDayOfWeek } from "../../utils/dateHelper";
import useColorTheme from "../../hooks/useColorTheme";

export type NotificationProps = {
  title: string;
  status: string,
  dateTimeStart: Date;
  dateTimeEnd?: Date;
};

type Props = {
  data: NotificationProps;
  onDelete: () => void;
  onMarkAsRead: () => void;
};

export function Notification({ data, onDelete, onMarkAsRead }: Props) {
  const { palette } = useTheme();
  const { mode } = useColorTheme();

  const dayOfWeek = getDayOfWeek(data.dateTimeStart)
    .substring(0, 3)
    .toLocaleUpperCase();

  return (
    <Box
      display="flex"
      flexDirection="column"
      paddingTop={2}
      paddingX={3}
      gap={2}
      width={"100%"}
      border={1}
      borderRadius={3}
      maxWidth={552}
      borderColor={palette.secondary.dark}
      bgcolor={data.status === 'unread' ? COLORS[mode].background.border : COLORS[mode].background.paper}
    >
      <Box display={"flex"} justifyContent={"space-between"} flexDirection={"row"} gap={2}>
        <Box>
          <Typography
            fontSize={FONT.title.lg.size}
            letterSpacing={FONT.body.sm.letter}
            color={data.status === 'unread' ? palette.text.primary : palette.text.secondary}
          >
            {data.title}
          </Typography>
          <Typography
            fontSize={FONT.body.lg.size}
            letterSpacing={0.1}
            fontWeight={500}
            color={data.status === 'unread' ? palette.text.primary : palette.text.secondary}
          >
            {formatTime(data.dateTimeStart)}
            {data.dateTimeEnd && ` - ${formatTime(data.dateTimeEnd)}`}
          </Typography>
        </Box>
        <Box>
          <Typography
            fontSize={FONT.body.lg.size}
            letterSpacing={FONT.body.lg.letter}
            color={palette.text.secondary}
          >
            {dayOfWeek}
          </Typography>
          <Typography fontSize={FONT.title.lg.lineHeight} color={data.status === 'unread' ? palette.text.primary : palette.text.secondary}>
            {data.dateTimeStart.getDate()}
          </Typography>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="flex-end"
        paddingBottom={0.5}
        paddingTop={0.5}
        paddingRight={1}
      >
        <Button variant="text" onClick={onDelete}>
          <Typography
            textTransform="none"
            fontSize={FONT.label.lg.size}
            fontWeight={FONT.label.lg.weight}
            letterSpacing={FONT.label.lg.letter}
            sx={{ opacity: data.status === 'read' ? 0.5 : 1 }}
          >
            Excluir
          </Typography>
        </Button>

        {data.status === 'unread' && (
          <Button variant="text" onClick={onMarkAsRead}>
            <Typography
              textTransform="none"
              fontSize={FONT.label.lg.size}
              fontWeight={FONT.label.lg.weight}
              letterSpacing={FONT.label.lg.letter}
            >
              Marcar como lida
            </Typography>
          </Button>
        )}
      </Box>
    </Box>
  );
}
