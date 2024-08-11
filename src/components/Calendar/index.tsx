import { ViewState } from "@devexpress/dx-react-scheduler";
import { Appointments, DateNavigator, DayView, MonthView, Scheduler, Toolbar, ViewSwitcher, WeekView, CurrentTimeIndicator, AppointmentTooltip, TodayButton } from "@devexpress/dx-react-scheduler-material-ui";
import { Paper, useTheme } from "@mui/material";
import { useState } from "react";
import { AppointmentComponent, AppointmentTooltipContent } from "./Appointment";
import { ToolbarWithLoading } from "./Toolbar";


export function Calendar() {
  
  const [date, setDate] = useState(new Date());
  const {palette} = useTheme();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Paper style={{backgroundColor: palette.background.default}} >

      <Scheduler
        locale="pt-BR"
        height={window.innerHeight*0.9}
        firstDayOfWeek={0}
        data={[
          { title: 'Mail New Leads for Follow Up', startDate: '2024-08-05T10:00', bg: "#F0f" },
          { title: 'Product Meeting', startDate: '2024-08-05T10:30', endDate: '2024-08-05T11:30', bg: "#80f", description: "Um texto bonito de descrição da atividade" },
          { title: 'Send Territory Sales Breakdown', startDate: '2024-08-05T12:35', bg: "#F58" },
        ]}
        >
        <ViewState
          currentDate={date}
          onCurrentDateChange={setDate}
        />
        <Toolbar 
          {...isLoading ? { rootComponent: ToolbarWithLoading } : null }
        />
        <ViewSwitcher />
        <DateNavigator />
        <TodayButton />
        <WeekView
          displayName="Semana"
          cellDuration={30}
          startDayHour={4}
        />
        <DayView 
          startDayHour={4}
          displayName="Dia"
        />
        <MonthView 
          displayName="Mês"
        />
        <Appointments 
          appointmentComponent={AppointmentComponent}
        />
        <AppointmentTooltip
          showCloseButton
          contentComponent={AppointmentTooltipContent}
        />
        <CurrentTimeIndicator 
          shadePreviousCells
          shadePreviousAppointments
        />

      </Scheduler>
    </Paper>
  )
}