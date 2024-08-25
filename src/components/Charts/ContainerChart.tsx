import { Box, Paper, Typography, useTheme } from "@mui/material";
import { ReactNode } from "react";
import { FONT } from "../../utils/theme";

type Props = {
  title: string;
  children: ReactNode;
};

export function ContainerChart({ title, children }: Props) {
  const { palette } = useTheme();

  return (
    <Paper>
      <Box
        padding={2}
        gap={1}
        height={256}
        display="flex"
        flexDirection="column"
      >
        <Typography
          fontSize={FONT.title.sm.size}
          fontWeight={FONT.title.sm.weight}
          letterSpacing={FONT.title.sm.letter}
          color={palette.text.secondary}
        >
          {title}
        </Typography>
        {children}
      </Box>
    </Paper>
  );
}
