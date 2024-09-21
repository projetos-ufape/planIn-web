import { CalendarMonthOutlined, NotificationsNone } from "@mui/icons-material";
import { Box, Icon, MenuItem, TextField } from "@mui/material";
import { DatePicker, TimePicker } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";

export function DateSettings() {

  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());
  const [startTime, setStartTime] = useState<Dayjs | null>(dayjs());
  const [endTime, setEndTime] = useState<Dayjs | null>(dayjs().add(1, 'hour'));
  const [notificationTime, setNotificationTime] = useState<number>(30);

  return (
    <Box display="flex" flexDirection="column" gap={3}>
      <Box display="flex" flexDirection="row" gap={2}>
        {/* <Icon><CalendarMonthOutlined fontSize="medium" color="action" /></Icon> */}
        <DatePicker
          label="Data"
          value={selectedDate}
          onChange={(newValue) => setSelectedDate(newValue)}
        />

        <TimePicker
          label="Hora de Início"
          value={startTime}
          onChange={(newValue) => setStartTime(newValue)}
        />

        <TimePicker
          label="Hora de Término"
          value={endTime}
          onChange={(newValue) => setEndTime(newValue)}
        />

      </Box>
      <Box display="flex" flexDirection="row" gap={2}>
        <Icon><NotificationsNone fontSize="medium" color="action" /></Icon>
        <TextField
            label="Notificação"
            select
            value={notificationTime}
            onChange={(e) => setNotificationTime(Number(e.target.value))}
          >
            {[5, 10, 15, 30, 60].map((option) => (
              <MenuItem key={option} value={option}>
                {option} minutos
              </MenuItem>
            ))}
          </TextField>
      </Box>
    </Box>
  )
}