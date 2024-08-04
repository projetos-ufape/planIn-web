import { Calendar as BigCalendar, dayjsLocalizer } from "react-big-calendar";
import dayjs from 'dayjs';
import { messages } from "./const";
import timezone from 'dayjs/plugin/timezone';
import 'dayjs/locale/pt-br';
dayjs.extend(timezone);
dayjs.locale("pt-br");

export function Calendar() {
  const localizer = dayjsLocalizer(dayjs);

  return (
    <BigCalendar
        localizer={localizer}
        messages={messages}
        style={{width: '80%', height: '80%'}}
        events={[
          {title: "Teste", start: new Date("2024-08-04 18:00:00"), end: new Date("2024-08-04 18:30:00")},
          {title: "Teste", start: new Date("2024-08-04 19:00:00"), end: new Date("2024-08-04 20:30:00")},
          {title: "Teste", start: new Date("2024-08-04 14:00:00"), end: new Date("2024-08-04 16:30:00")},
          {title: "Teste", start: new Date("2024-08-05 19:00:00"), end: new Date("2024-08-05 20:30:00")},
        ]}
      />
  )
}