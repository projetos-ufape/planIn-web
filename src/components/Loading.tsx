import { Box, CircularProgress } from "@mui/material";

type LoadingProps = {
  color?: "inherit" | "primary" | "secondary" | "error" | "info" | "success" | "warning";
  size?: string;
}

export function Loading({color = "primary", size = "2rem"}: LoadingProps) {
  return (
    <Box display="flex" height="100%" alignItems="center" justifyContent="center">
      <CircularProgress size={size} color={color} />
    </Box>
  )
}