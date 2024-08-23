import { Box, Container } from "@mui/material";
import { Tabs } from "../components/Tabs";
import { Calendar } from "../components/Calendar";
import { TabPanel } from "../components/Tabs/TabPanel";
import { useState } from "react";
import { NavBar } from "../components/NavBar";

export function Home() {

  const [currentTab, setCurrentTab] = useState<"goals" | "calendar" | "dashboard">("dashboard");
  const handleChangeTab = (event: React.SyntheticEvent, newTab: "goals" | "calendar" | "dashboard") => {
    setCurrentTab(newTab);
  };


  return (
    <Box flexDirection={"column"} width={"100%"} alignItems={"center"}>
      <NavBar />
      <Container>
        <Tabs currentTab={currentTab} handleChangeTab={handleChangeTab}>
          <TabPanel current={currentTab} value="dashboard">
            <Box bgcolor="#f00" width={100} height={100}></Box>
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
