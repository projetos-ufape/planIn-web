import { Box, Button, MenuItem, Select, Typography, useTheme } from "@mui/material";
import { COLORS, FONT } from "../../utils/theme";
import useColorTheme from "../../hooks/useColorTheme";
import { useModal } from "../../hooks/useModal";
import { KeyboardArrowDownOutlined } from "@mui/icons-material";


export function Mode() {
  const { isLoading, disabledMode, mode, setMode, status, setStatus } = useModal();
  const { mode: theme } = useColorTheme();
  const { palette } = useTheme();

  return (
    <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
      <Box display="flex" flexDirection="row" gap={2}>
        <Button
          variant="contained"
          sx={{
            height: 32,
            borderRadius: 2,
            textTransform: "none",
            backgroundColor: mode === "task" ? palette.primary.dark : COLORS[theme].background.secondary,
            opacity: mode === "task" ? 1 : 0.4,
          }}
          onClick={() => {setMode("task")}}
          disabled={isLoading || disabledMode}
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
            backgroundColor: mode === "goal" ? palette.primary.dark : COLORS[theme].background.secondary,
            opacity: mode === "goal" ? 1 : 0.4,
          }}
          onClick={() => {setMode("goal")}}
          disabled={isLoading || disabledMode}
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
      {
        mode === "task" && (
          <Select
            value={status}
            sx={{
              width: 120,
              borderRadius: 2,
              height: 32,
            }}
            IconComponent={(props) => (
              <KeyboardArrowDownOutlined {...props} fontSize="small" />
            )}
            onChange={(e) =>
              setStatus(e.target.value as "PARCIALMENTE_EXECUTADA" | "EXECUTADA" | "ADIADA")
            }
          >
            <MenuItem value="ADIADA">Adiada</MenuItem>
            <MenuItem value="PARCIALMENTE_EXECUTADA">Criada</MenuItem>
            <MenuItem value="EXECUTADA">Finalizada</MenuItem>
            
          </Select>
        )
      }
    </Box>
  );
}