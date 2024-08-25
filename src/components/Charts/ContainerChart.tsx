import { Box, Paper, Typography, useTheme } from "@mui/material";
import { ReactNode } from "react";
import { FONT } from "../../utils/theme";
import { Loading } from "../Loading";

type Props = {
  title: string;
  children: ReactNode;
  loading: boolean;
};

export function ContainerChart({ title, children, loading }: Props) {
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
        {
          loading ? <Loading /> : children
        }
      </Box>
    </Paper>
  );
}
