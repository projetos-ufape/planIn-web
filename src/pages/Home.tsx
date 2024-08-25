import { Box, Container, Typography, useTheme } from "@mui/material";
import { Tabs } from "../components/Tabs";
import { Calendar } from "../components/Calendar";
import { TabPanel } from "../components/Tabs/TabPanel";
import { useState } from "react";
import { NavBar } from "../components/NavBar";
import { Charts } from "../components/Charts";
import { FONT } from "../utils/theme";

export function Home() {
  const { palette } = useTheme();
  const [currentTab, setCurrentTab] = useState<
    "goals" | "calendar" | "dashboard"
  >("dashboard");
  const handleChangeTab = (
    event: React.SyntheticEvent,
    newTab: "goals" | "calendar" | "dashboard"
  ) => {
    setCurrentTab(newTab);
  };

  return (
    <Box flexDirection={"column"} width={"100%"} alignItems={"center"}>
      <NavBar />
      <Container>
        <Typography fontSize={FONT.title.lg.size} color={palette.text.primary} marginTop={1} marginBottom={1}>
          Meu Workspace
        </Typography>
        <Tabs currentTab={currentTab} handleChangeTab={handleChangeTab}>
          <TabPanel current={currentTab} value="dashboard">
            <Charts />
          </TabPanel>
          <TabPanel current={currentTab} value="calendar">
            <Container>
              <Calendar />
            </Container>
          </TabPanel>
          <TabPanel current={currentTab} value="goals">
            <Box bgcolor="#f0f" width={100} height={100}></Box>
          </TabPanel>
        </Tabs>
      </Container>
    </Box>
  );
}
