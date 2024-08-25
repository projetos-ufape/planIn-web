import { Box, Typography, useTheme } from "@mui/material";
import { FONT } from "../../utils/theme";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import { useEffect, useState } from "react";
import { PeriodType } from "../../types/PeriodProps";

type TitleProps = {
  date: Date;
  mode: Omit<PeriodType, "daily">;
};

export function Title({ date, mode }: TitleProps) {
  dayjs.locale("pt-br");
  const { palette } = useTheme();

  const [year, setYear] = useState("");
  const [formattedDate, setFormattedDate] = useState("");

  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    switch (mode) {
      case "weekly": {
        const startOfWeek = dayjs(date).startOf("week");
        const endOfWeek = dayjs(date).endOf("week");
        setFormattedDate(
          `${startOfWeek.format("DD")} - ${endOfWeek.format(
            "DD"
          )} ${capitalizeFirstLetter(endOfWeek.format("MMMM"))}`
        );
        setYear(endOfWeek.format("YYYY"));
        break;
      }
      case "monthly": {
        setFormattedDate(capitalizeFirstLetter(dayjs(date).format("MMMM")));
        setYear(dayjs(date).format("YYYY"));
        break;
      }
      case "yearly": {
        setFormattedDate(dayjs(date).format("YYYY"));
        break;
      }
      default: {
        setFormattedDate("");
        setYear("");
        break;
      }
    }
  }, [date, mode]);

  return (
    <Box display="flex" gap={1}>
      <Typography fontSize={FONT.title.lg.size} color={palette.text.primary}>
        {formattedDate}
      </Typography>
      {mode !== "yearly" && (
        <Typography
          fontSize={FONT.title.lg.size}
          color={palette.text.secondary}
        >
          {year}
        </Typography>
      )}
    </Box>
  );
}
