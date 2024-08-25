import { Box } from "@mui/material";

type TabPanelProps = {
  children?: React.ReactNode;
  dir?: string;
  value: string;
  current: string;
}

export function TabPanel(props: TabPanelProps) {
  const { children, current, value, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={current !== value}
      id={`full-width-tabpanel-${value}`}
      aria-labelledby={`full-width-tab-${value}`}
      {...other}
    >
      {current === value && (
        <Box padding={3}>
          {children}
        </Box>
      )}
    </Box>
  );
}