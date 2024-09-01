import { Container, Typography, useTheme } from "@mui/material";

export function NotFound() {

  const { palette } = useTheme();

  return (
    <Container>
      <Typography color={palette.text.primary} >Página Not Found</Typography>
    </Container>
  )
}