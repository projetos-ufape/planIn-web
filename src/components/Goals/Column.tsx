import { Box, Typography, useTheme } from "@mui/material";
import { Card } from "./Card";
import { FONT } from "../../utils/theme";
import { GoalProps } from "../../types/GoalsProps";

type ColumnProps = {
  label: string;
  data: GoalProps[];
}

export function Column({label, data}: ColumnProps) {
  const { palette } = useTheme();

  return (
    <Box display="flex" flexDirection="column" gap={1}>
      <Typography
        color={palette.text.primary}
        fontSize={FONT.title.sm.size}
        letterSpacing={FONT.title.sm.letter}
        fontWeight={FONT.title.sm.weight}
      >
        {label}
      </Typography>
      <Box display="flex" flexDirection="column" gap={2}>
        {
          data.map((g) => {
            return (<Card data={g} />)
          })
        }
      </Box>
    </Box>
  );
}
