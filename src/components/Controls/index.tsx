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

type ControlsProps = {
  mode: Omit<PeriodType, "daily">;
  setMode: (value: Omit<PeriodType, "daily">) => void;
  date: Date;
  setDate: (value: Date) => void;
};

export function Controls({ mode, setMode, date, setDate }: ControlsProps) {
  const { palette } = useTheme();

  const handleChange = (event: SelectChangeEvent) => {
    setMode(event.target.value);
  };

  return (
    <FormControl sx={{ minWidth: 120 }} size="small">
      <Box display="flex" flexDirection="row" gap={3}>
        <Title date={date} mode={mode} />

        <Navigate date={date} setDate={setDate} mode={mode} />

        <Select
          value={mode as string}
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
    </FormControl>
  );
}
