import { Box, CircularProgress } from "@mui/material";

export function Loading() {
  return (
    <Box display="flex" height="100%" alignItems="center" justifyContent="center">
      <CircularProgress color="primary" />
    </Box>
  )
}