import { Box, TextField } from "@mui/material";
import styles from "./styles"

type parametrosExemplo = {
  label: string
}

export function ComponenteExemplo({ label }: parametrosExemplo) {
  return (
    <Box>
      <TextField label={label} style={styles.estiloExemplo} />
    </Box>
  )
}