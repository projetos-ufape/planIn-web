import { useEffect, useState } from "react";
import { createContext, ReactNode } from "react";
import dayjs, { Dayjs } from "dayjs";
import { Modal } from "../components/Modal";
import toast from "react-hot-toast";
import { useTask } from "../hooks/useTask";
import { NewTaskProps, StatusTaskType, TaskProps, UpdateTaskProps } from "../types/TaskPorps";

export interface ModalContextProps {
  id?: string;
  disabledMode: boolean;
  mode: "task" | "goal";
  setMode: (mode: "task" | "goal") => void;
  title: string;
  setTitle: (title: string) => void;
  description: string;
  setDescription: (description: string) => void;
  selectedDate: Dayjs | null;
  setSelectedDate: (date: Dayjs | null) => void;
  endTime: Dayjs | null;
  setEndTime: (time: Dayjs | null) => void;
  notification: "sim" | "nao";
  setNotification: (value: "sim" | "nao") => void;
  notificationTime: number;
  setNotificationTime: (time: number) => void;
  goalWithoutDate: boolean;
  setGoalWithoutDate: (value: boolean) => void;
  isLoading: boolean;
  open: boolean;
  handleOpen: (mode?: "task" | "goal") => void;
  handleClose: () => void;
  notificationTimeType: "MINUTE" | "HOUR";
  setNotificationTimeType: (value: "MINUTE" | "HOUR") => void;
  categorySelected: string;
  setCategorySelected: (value: string) => void;
  handleCreate: () => Promise<void>;
  handleOpenUpdateTask: (task: TaskProps) => void;
  status: StatusTaskType;
  setStatus: (value: StatusTaskType) => void;
}

export const ModalContext = createContext<ModalContextProps>(
  {} as ModalContextProps
);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [id, setId] = useState<string>();
  const [disabledMode, setDisabledMode] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [mode, setMode] = useState<"task" | "goal">("task");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());
  const [endTime, setEndTime] = useState<Dayjs | null>(dayjs().add(1, "hour"));
  const [notification, setNotification] = useState<"sim" | "nao">("sim");
  const [notificationTimeType, setNotificationTimeType] = useState<"MINUTE" | "HOUR">("MINUTE");
  const [notificationTime, setNotificationTime] = useState<number>(30);
  const [goalWithoutDate, setGoalWithoutDate] = useState<boolean>(false);
  const [categorySelected, setCategorySelected] = useState<string>("");
  const [status, setStatus] = useState<StatusTaskType>("PARCIALMENTE_EXECUTADA");
  const [isLoading, setIsLoading] = useState(false);

  const { createTask, updateTask } = useTask();

  function handleOpen(mode: "task" | "goal" = "task") {
    setMode(mode);
    setOpen(true);
  }

  function handleClose() {
    setId(undefined);
    setMode("task");
    setStatus("PARCIALMENTE_EXECUTADA");
    setDisabledMode(false);
    setTitle("");
    setDescription("");
    setCategorySelected("")
    setSelectedDate(dayjs());
    setEndTime(dayjs().add(1, "hour"));
    setNotification("sim");
    setNotificationTime(30);
    setGoalWithoutDate(false);
    setIsLoading(false);
    setOpen(false);
  }

  function handleOpenUpdateTask(task: TaskProps) {
    setId(task._id);
    setMode("task");
    setStatus(task.status);
    setDisabledMode(true);
    setTitle(task.title);
    setDescription(task.description);
    setCategorySelected(task.category._id);
    setSelectedDate(dayjs(task.start_date));
    setEndTime(dayjs(task.end_date));
    setNotification((task.notification_time_unit && task.notification_time_value) ? "sim" : "nao");
    setNotificationTimeType(task.notification_time_unit || "MINUTE");
    setNotificationTime(task.notification_time_value || 30);
    setGoalWithoutDate(false);

    setOpen(true);
  }

  async function handleCreate() {
    if (title.trim().length < 2){
      toast.error("Título precisa ter pelo menos dois caracteres");
      return;
    }
    if (description.trim().length === 0){
      toast.error("Descrição precisa ter pelo menos um caractere");
      return;
    }
    if (mode === "task" && selectedDate === null) {
      toast.error("Necessário selecioar uma data");
      return;
    }

    if (!selectedDate || !endTime) {
      toast.error('Datas inválidas');
      return;
    }
    if (categorySelected === ""){
      toast.error("selecione uma categoria");
      return;
    }

    setIsLoading(true);
    const endHour = endTime.hour();
    const endMinute = endTime.minute();

    let  calculatedEndTime = selectedDate.hour(endHour).minute(endMinute);
    if (calculatedEndTime.isBefore(selectedDate)) {
      calculatedEndTime = calculatedEndTime.add(1, 'day');
    }
    const startDateISO = selectedDate.toISOString(); 
    const endDateISO = calculatedEndTime.toISOString();

    if (id) {
      const requestBody: UpdateTaskProps = {
        id,
        title,
        description,
        start_date: startDateISO,
        end_date: endDateISO,
        category_id: categorySelected,
        status: status,
        notification_time_unit: notification === "sim" ? notificationTimeType : null,
        notification_time_value: notification === "sim" ? notificationTime : null
      };

      await updateTask(requestBody).finally(() => {
        setIsLoading(false);
      })
    } else {
      const requestBody: NewTaskProps = {
        title,
        description,
        start_date: startDateISO,
        end_date: endDateISO,
        status: status,
        category_id: categorySelected,
        notification_time_unit: notification === "sim" ? notificationTimeType : null,
        notification_time_value: notification === "sim" ? notificationTime : null
      };
      
      await createTask(requestBody).finally(() => {
        setIsLoading(false);
        handleClose();
      });
    }

  }

  useEffect(() => {
    if (mode === "task") {
      setGoalWithoutDate(false);
    }
  }, [mode]);

  return (
    <ModalContext.Provider
      value={{
        id,
        disabledMode,
        status,
        setStatus,
        mode,
        setMode,
        title,
        setTitle,
        description,
        setDescription,
        selectedDate,
        setSelectedDate,
        endTime,
        setEndTime,
        notification,
        setNotification,
        notificationTime,
        setNotificationTime,
        goalWithoutDate,
        setGoalWithoutDate,
        isLoading,
        open,
        handleOpen,
        handleClose,
        notificationTimeType,
        setNotificationTimeType,
        categorySelected,
        setCategorySelected,
        handleCreate,
        handleOpenUpdateTask
      }}
    >
      {children}
      <Modal />
    </ModalContext.Provider>
  );
};
