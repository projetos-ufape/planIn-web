import {
  DateRange,
  KeyboardArrowDownOutlined,
  NotificationsNone
} from "@mui/icons-material";
import {
  Box,
  Checkbox,
  Icon,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from "@mui/material";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import { FONT } from "../../utils/theme";
import { useModal } from "../../hooks/useModal";

export function DateSettings() {
  const {
    mode,
    selectedDate,
    setSelectedDate,
    goalWithoutDate,
    setGoalWithoutDate,
    startTime,
    setStartTime,
    endTime,
    setEndTime,
    notification,
    setNotification,
    notificationTime,
    setNotificationTime,
    notificationTimeType,
    setNotificationTimeType,
  } = useModal();

  return (
    <Box display="flex" flexDirection="column" gap={3}>
      <Box display="flex" flexDirection="row" alignItems="center" gap={2}>
        <Icon>
          <DateRange fontSize="medium" color="action" />
        </Icon>
        <DatePicker
          label="Data"
          value={selectedDate}
          onChange={(newValue) => setSelectedDate(newValue)}
          sx={{ maxWidth: 160, width: "100%" }}
          disabled={goalWithoutDate}
        />

        {mode === "task" ? (
          <>
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
          </>
        ) : (
          <Box
            display="flex"
            flexDirection="row"
            alignSelf="flex-end"
            alignItems="flex-end"
            gap={1}
          >
            <Checkbox
              sx={{ padding: 0 }}
              value={goalWithoutDate}
              onChange={() => setGoalWithoutDate(!goalWithoutDate)}
              disableFocusRipple
              disableTouchRipple
              disableRipple
            />
            <Typography
              fontSize={FONT.body.md.size}
              letterSpacing={FONT.body.md.letter}
              color="HighlightText"
            >
              Meta sem prazo
            </Typography>
          </Box>
        )}
      </Box>
      <Box display="flex" flexDirection="row" alignItems="center" gap={2}>
        <Icon>
          <NotificationsNone fontSize="medium" color="action" />
        </Icon>
        <Select
          value={notification}
          sx={{
            width: 160,
            borderRadius: 2,
            height: 32,
          }}
          IconComponent={(props) => (
            <KeyboardArrowDownOutlined {...props} fontSize="small" />
          )}
          onChange={(e) => setNotification(e.target.value as "sim" | "nao")}
        >
          <MenuItem value="sim">Me lembrar</MenuItem>
          <MenuItem value="nao">Não lembrar</MenuItem>
        </Select>
        {notification === "sim" && (
          <>
            <OutlinedInput
              type="number"
              value={notificationTime}
              onChange={(e) => {
                console.log(e.target.value);
                const n =
                  e.target.value.startsWith("0") && e.target.value.length > 1
                    ? e.target.value.substring(1)
                    : e.target.value;
                if (Number(n) >= 0) {
                  setNotificationTime(Number(n));
                }
              }}
              sx={{
                width: 80,
                borderRadius: 2,
                height: 32,
              }}
            />
            <Select
              value={notificationTimeType}
              sx={{
                width: 120,
                borderRadius: 2,
                height: 32,
              }}
              IconComponent={(props) => (
                <KeyboardArrowDownOutlined {...props} fontSize="small" />
              )}
              onChange={(e) =>
                setNotificationTimeType(e.target.value as "minute" | "hour")
              }
            >
              <MenuItem value="minute">Minutos</MenuItem>
              <MenuItem value="hour">Horas</MenuItem>
            </Select>
          </>
        )}
      </Box>
    </Box>
  );
}
