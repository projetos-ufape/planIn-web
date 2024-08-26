import { Box, Typography, useTheme } from "@mui/material";
import { COLORS, FONT } from "../../utils/theme";
import useColorTheme from "../../hooks/useColorTheme";
import { Tag } from "../Tag";
import { GoalProps } from "../../types/GoalsProps";

type CardProps = {
  data: GoalProps;
}

export function Card({data}: CardProps) {
  const { palette } = useTheme();
  const { mode } = useColorTheme();

  return (
    <Box
      bgcolor={COLORS[mode].background.secondary}
      display="flex"
      flexDirection="column"
      gap={2}
      padding={2}
      border={1}
      borderColor={COLORS[mode].background.border}
      borderRadius={2}
    >
      <Typography
        fontSize={FONT.body.sm.size}
        letterSpacing={FONT.body.sm.letter}
        color={palette.text.primary}
      >
        {data.title}
      </Typography>

      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Tag label={data.category.label} color={data.category.color} />
        <Typography fontSize={10} letterSpacing={FONT.body.sm.letter} fontWeight={500} color={palette.text.secondary} >01 Set</Typography>
      </Box>
    </Box>
  );
}
