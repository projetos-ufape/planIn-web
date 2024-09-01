import { Box, Typography } from "@mui/material";
import { COLORS, FONT } from "../utils/theme";

type TagProps = {
  label: string;
  color: string;
}

export function Tag({label, color}: TagProps) {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" paddingX={1} paddingY={0.25} borderRadius={99} bgcolor={color} height={20} >
      <Typography fontSize={FONT.body.sm.size - 2} letterSpacing={FONT.body.sm.letter} lineHeight={1} fontWeight={500} color={COLORS.dark.text.primary} >{label}</Typography>
    </Box>
  )
}