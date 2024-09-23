import { Box, Button, Modal as ModalMui, TextField, useTheme } from "@mui/material"
import { Mode } from "./Mode"
import { DateSettings } from "./DateSettings"
import { useModal } from "../../hooks/useModal"
import { SelectCategory } from "../SelectCategory";

export function Modal() {
  const { palette } = useTheme();
  const {
    open,
    handleClose,
    id,
    title,
    setTitle,
    description,
    setDescription,
    handleCreate,
    isLoading
  } = useModal();

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
          disabled={isLoading}
          required
        />

        <Mode />

        <DateSettings />

        <SelectCategory />

        <TextField
          type="text"
          label="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          disabled={isLoading}
        />

        <Box display="flex" flexDirection="row" justifyContent="space-between" >
          <Button variant="text" onClick={handleClose} disabled={isLoading} sx={{ textTransform: 'none', borderRadius: 100 }}>Cancelar</Button>
          <Button variant="contained" onClick={handleCreate} disabled={isLoading} sx={{ textTransform: 'none', borderRadius: 100 }}>{id ? "Salvar" : "Criar"}</Button>
        </Box>
      </Box>
    </ModalMui>
  )
}