import { Box, Button } from "@mui/material";
import { ModeType } from "../../types/ModeProps";

type ModeProps = {
  mode: ModeType;
  setMode: (mode: ModeType) => void;
};

export function Mode({ mode, setMode }: ModeProps) {

  return (
    <Box display="flex" flexDirection="row" gap={2}>
      <Button
        variant={mode === 'goals' ? 'contained' : 'outlined'}
        sx={{
          borderRadius: 2,
          textTransform: 'none',
        }}
        onClick={() => setMode("goals")}
      >
        Metas
      </Button>
      <Button variant={mode === 'tasks' ? 'contained' : 'outlined'} sx={{
          borderRadius: 2,
          textTransform: 'none',
        }}
        onClick={() => setMode("tasks")}
      >Tarefas</Button>
    </Box>
  );
}
