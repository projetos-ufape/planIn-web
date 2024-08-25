import { Toolbar } from "@devexpress/dx-react-scheduler-material-ui";
import { Box, LinearProgress } from "@mui/material";

export const ToolbarWithLoading = ({
  children,
  ...restProps
}: Toolbar.RootProps) => (
  <Box position="relative">
    <Toolbar.Root {...restProps}>{children}</Toolbar.Root>
    <LinearProgress />
  </Box>
);
