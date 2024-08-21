import { Box, Typography, useTheme } from "@mui/material";
import { FONT } from "../../utils/theme";
import { formatTime, getDayOfWeek } from "../../utils/dateHelper";

export type NotificationProps = {
  title: string;
  dateTimeStart: Date;
  dateTimeEnd?: Date;
}

type Props = {
  data: NotificationProps;
}

//TODO: Notification type
export function Notification({ data }: Props) {
  const { palette } = useTheme();

  const dayOfWeek = getDayOfWeek(data.dateTimeStart).substring(0, 3).toLocaleUpperCase();

  return (
    <Box display="flex" flexDirection="row" justifyContent="space-between" padding={2} gap={2} width={328}>
      <Box>
        <Typography fontSize={FONT.body.lg.size} letterSpacing={FONT.body.lg.letter}>{data.title}</Typography>
        <Typography fontSize={FONT.body.lg.size} letterSpacing={0.1} fontWeight={500}>{formatTime(data.dateTimeStart)}{data.dateTimeEnd && ` - ${formatTime(data.dateTimeEnd)}` }</Typography>
      </Box>
      <Box>
        <Typography fontSize={FONT.body.sm.size} letterSpacing={FONT.body.sm.letter} color={palette.text.secondary}>{dayOfWeek}</Typography>
        <Typography fontSize={FONT.title.lg.size}>{data.dateTimeStart.getDate()}</Typography>
      </Box>
    </Box>
  )
}