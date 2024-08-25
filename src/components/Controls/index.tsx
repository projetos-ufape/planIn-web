import { KeyboardArrowDownOutlined } from "@mui/icons-material";
import {
  Box,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  useTheme,
} from "@mui/material";
import { Title } from "./Title";
import { PeriodType } from "../../types/PeriodProps";
import { Navigate } from "./Navigate";
import { Mode } from "./Mode";
import { ModeType } from "../../types/ModeProps";

type ControlsProps = {
  period: Omit<PeriodType, "daily">;
  setPeriod: (value: Omit<PeriodType, "daily">) => void;
  mode: ModeType;
  setMode: (mode: ModeType) => void;
  date: Date;
  setDate: (value: Date) => void;
};

export function Controls({ period, setPeriod, date, setDate, mode, setMode }: ControlsProps) {
  const { palette } = useTheme();

  const handleChange = (event: SelectChangeEvent) => {
    setPeriod(event.target.value);
  };

  return (
    <FormControl sx={{ minWidth: 120 }} size="small">
      <Box display="flex" justifyContent="space-between">
      <Box display="flex" flexDirection="row" gap={3}>
        <Title date={date} period={period} />

        <Navigate date={date} setDate={setDate} period={period} />

        <Select
          value={period as string}
          variant="outlined"
          onChange={handleChange}
          sx={{
            width: 120,
            borderRadius: 100,
            height: 32,
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: palette.primary.dark,
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: palette.primary.main,
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: palette.primary.main,
            },
            color: palette.primary.light,
            "&:hover .MuiSelect-select": {
              color: palette.primary.main,
            },
            "&.Mui-focused .MuiSelect-select": {
              color: palette.primary.main,
            },
            "& .MuiSelect-icon": {
              color: palette.primary.main,
            },
          }}
          IconComponent={(props) => (
            <KeyboardArrowDownOutlined {...props} fontSize="small" />
          )}
        >
          <MenuItem value="weekly">Semana</MenuItem>
          <MenuItem value="monthly">Mês</MenuItem>
          <MenuItem value="yearly">Ano</MenuItem>
        </Select>
      </Box>
          <Mode mode={mode} setMode={setMode} />
      </Box>
    </FormControl>
  );
}
