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
      <TabsMui value={currentTab} onChange={handleChangeTab}>
        <Tab value="dashboard" label="Dashboard" />
        <Tab value="calendar" label="Calendário" />
        <Tab value="goals" label="Metas" />
      </TabsMui>
      <Divider />
      {children}
    </>
  );
}
