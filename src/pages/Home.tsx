import { Box, Container } from "@mui/material";
import { Tabs } from "../components/Tabs";
import { Calendar } from "../components/Calendar";

export function Home() {

  return (
    <Box flexDirection={"column"} width={"100%"} alignItems={"center"}>
      <Tabs />

      <Container>
        <Calendar />
      </Container>
    </Box>
  );
}
