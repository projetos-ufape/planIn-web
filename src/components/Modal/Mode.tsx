import { Box, Button, Typography, useTheme } from "@mui/material";
import { COLORS, FONT } from "../../utils/theme";
import useColorTheme from "../../hooks/useColorTheme";
import { useModal } from "../../hooks/useModal";

type ModeProps = {
  type: 'task' | 'goal'
  setType: (type: 'task' | 'goal') => void
}

export function Mode({ type, setType }: ModeProps) {
  const { isLoading } = useModal();
  const { mode } = useColorTheme();
  const { palette } = useTheme();

  return (
    <Box display="flex" flexDirection="row" gap={2}>
      <Button
        variant="contained"
        sx={{
          height: 32,
          borderRadius: 2,
          textTransform: "none",
          backgroundColor: type === "task" ? palette.primary.dark : COLORS[mode].background.secondary,
          opacity: type === "task" ? 1 : 0.4,
        }}
        onClick={() => {setType("task")}}
        disabled={isLoading}
      >
        <Typography
          fontSize={FONT.label.lg.size}
          fontWeight={FONT.label.lg.weight}
          color={"HighlightText"}
        >
          Tarefa
        </Typography>
      </Button>
      <Button
        variant="contained"
        sx={{
          height: 32,
          borderRadius: 2,
          textTransform: "none",
          backgroundColor: type === "goal" ? palette.primary.dark : COLORS[mode].background.secondary,
          opacity: type === "goal" ? 1 : 0.4,
        }}
        onClick={() => {setType("goal")}}
        disabled={isLoading}
      >
        <Typography
          fontSize={FONT.label.lg.size}
          fontWeight={FONT.label.lg.weight}
          color={"HighlightText"}
        >
          Meta
        </Typography>
      </Button>
    </Box>
  );
}