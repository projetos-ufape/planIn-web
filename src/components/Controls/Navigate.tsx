import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import dayjs from "dayjs";
import { PeriodType } from "../../types/PeriodProps";

type NavigateProps = {
  date: Date;
  setDate: (date: Date) => void;
  period: Omit<PeriodType, "daily">;
};

export function Navigate({ date, setDate, period }: NavigateProps) {
  const handleBackDate = () => {
    let newDate;
    switch (period) {
      case "weekly":
        newDate = dayjs(date).subtract(1, "week").toDate();
        break;
      case "monthly":
        newDate = dayjs(date).subtract(1, "month").toDate();
        break;
      case "yearly":
        newDate = dayjs(date).subtract(1, "year").toDate();
        break;
      default:
        return;
    }
    setDate(newDate);
  };

  const handleForwardDate = () => {
    let newDate;
    switch (period) {
      case "weekly":
        newDate = dayjs(date).add(1, "week").toDate();
        break;
      case "monthly":
        newDate = dayjs(date).add(1, "month").toDate();
        break;
      case "yearly":
        newDate = dayjs(date).add(1, "year").toDate();
        break;
      default:
        return;
    }
    setDate(newDate);
  };

  return (
    <Box display="flex" flexDirection="row" gap={1}>
      <IconButton size="small" color="primary" onClick={handleBackDate}>
        <ChevronLeft fontSize="small" />
      </IconButton>
      <IconButton size="small" color="primary" onClick={handleForwardDate}>
        <ChevronRight fontSize="small" />
      </IconButton>
    </Box>
  );
}
