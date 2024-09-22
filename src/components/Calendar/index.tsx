import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Appointments,
  DateNavigator,
  DayView,
  MonthView,
  Scheduler,
  Toolbar,
  ViewSwitcher,
  WeekView,
  CurrentTimeIndicator,
  AppointmentTooltip,
  TodayButton,
} from "@devexpress/dx-react-scheduler-material-ui";
import { Paper, useTheme } from "@mui/material";
import { useState } from "react";
import { AppointmentComponent, AppointmentTooltipContent } from "./Appointment";
import { ToolbarWithLoading } from "./Toolbar";
import { useTask } from "../../hooks/useTask";

export function Calendar() {
  const [date, setDate] = useState(new Date());
  const { palette } = useTheme();
  const { tasks, isLoadingTask } = useTask();


  return (
    <Paper style={{ backgroundColor: palette.background.default }}>
      <Scheduler
        locale="pt-BR"
        height={window.innerHeight * 0.9}
        firstDayOfWeek={0}
        data={tasks.map((task) => {
          return {
            ...task,
            id: task._id,
            startDate: task.start_date,
            endDate: task.end_date,
            title: task.title,
          }
        })}
      >
        <ViewState currentDate={date} onCurrentDateChange={setDate} />
        <Toolbar
          {...(isLoadingTask ? { rootComponent: ToolbarWithLoading } : null)}
        />
        <ViewSwitcher />
        <DateNavigator />
        <TodayButton />
        <WeekView displayName="Semana" cellDuration={30} />
        <DayView startDayHour={4} displayName="Dia" />
        <MonthView displayName="Mês" />
        <Appointments appointmentComponent={AppointmentComponent} />
        <AppointmentTooltip
          showCloseButton
          contentComponent={AppointmentTooltipContent}
        />
        <CurrentTimeIndicator shadePreviousCells shadePreviousAppointments />
      </Scheduler>
    </Paper>
  );
}
