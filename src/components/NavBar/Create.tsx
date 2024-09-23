import { Add } from "@mui/icons-material";
import { Button, MenuItem, Menu as MenuMui } from "@mui/material";
import { useState } from "react";
import { FONT } from "../../utils/theme";
import { useModal } from "../../hooks/useModal";

export function Create() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { handleOpen } = useModal();
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const handleOpenModal = (mode: "task" | "goal") => {
    handleOpen(mode);
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        variant="contained"
        startIcon={<Add />}
        sx={{
          height: 40,
          borderRadius: 50,
          textTransform: "none",
          fontSize: FONT.label.lg.size,
          weight: FONT.label.lg.weight,
          letterSpacing: FONT.label.lg.letter,
        }}
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Criar
      </Button>

      <MenuMui
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={() => handleOpenModal("task")}>Tarefa</MenuItem>
        <MenuItem onClick={() => handleOpenModal("goal")}>Meta</MenuItem>
      </MenuMui>  
    </>
  );
}
