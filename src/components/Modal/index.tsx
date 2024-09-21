import { Box, Button, Modal as ModalMui, Select, TextField, useTheme } from "@mui/material"
import { useState } from "react"
import { Mode } from "./Mode"
import { DateSettings } from "./DateSettings"

type ModalProps = {
  open: boolean
  setOpen: (value: boolean) => void
  type?: 'task' | 'goal'
}

export function Modal({ open, setOpen, type = "task" }: ModalProps) {
  const { palette } = useTheme();
  const [mode, setMode] = useState<'task' | 'goal'>(type);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  function handleClose() {
    setOpen(false);
  }

  return (
    <ModalMui
      open={open}
      onClose={handleClose}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Box bgcolor={palette.background.default} display="flex" flexDirection="column" padding={2} gap={3} borderRadius={4} alignSelf="center" justifySelf="center" width="100%" maxWidth={552} >
        <TextField
          type="text"
          label="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <Mode type={mode} setType={setMode} />

        <DateSettings />

        <Select></Select>

        <TextField
          type="text"
          label="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <Box display="flex" flexDirection="row" justifyContent="space-between" >
          <Button variant="text" sx={{ textTransform: 'none', borderRadius: 100 }}>Cancelar</Button>
          <Button variant="contained" sx={{ textTransform: 'none', borderRadius: 100 }}>Criar</Button>
        </Box>
      </Box>
    </ModalMui>
  )
}