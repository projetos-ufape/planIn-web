import { Tabs as TabsMui, Tab, Divider } from "@mui/material";

type TabsProps = {
  children: React.ReactNode;
  currentTab: string;
  handleChangeTab: (
    event: React.SyntheticEvent,
    newTab: "goals" | "calendar" | "dashboard"
  ) => void;
};

export function Tabs({ children, currentTab, handleChangeTab }: TabsProps) {
  return (
    <>
      <TabsMui value={currentTab} onChange={handleChangeTab} >
        <Tab sx={{textTransform: 'none'}} value="dashboard" label="Dashboard" />
        <Tab sx={{textTransform: 'none'}} value="calendar" label="Calendário" />
        <Tab sx={{textTransform: 'none'}} value="goals" label="Metas" />
      </TabsMui>
      <Divider />
      {children}
    </>
  );
}
