import { Box } from "@mui/material";
import { Tabs } from "../components/Tabs";
import { Calendar } from "../components/Calendar";

export function Home() {
  return (
    <Box display={"flex"} flexDirection={"column"} width={"100%"} alignItems={"center"}>
      <Tabs />
      <Calendar />
    </Box>
  );
}
