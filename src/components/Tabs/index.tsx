import { Tabs as TabsMui, Tab } from "@mui/material";
import { useState } from "react";


export function Tabs(){

  const [currentTab, setCurrentTab] = useState<"tasks" | "calendar">("tasks");

  const handleChange = (event: React.SyntheticEvent, tab: "tasks" | "calendar") => {
    setCurrentTab(tab);
  };

  return (
    <TabsMui value={currentTab} onChange={handleChange}>
      <Tab value="tasks" label="Tasks" />
      <Tab value="calendar" label="Calendário" />
    </TabsMui>
  )
}