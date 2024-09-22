import { useEffect, useState } from "react";
import { createContext, ReactNode } from "react";
import dayjs, { Dayjs } from "dayjs";
import { Modal } from "../components/Modal";
import toast from "react-hot-toast";
import { api } from "../service/api";
import { handleError } from "../utils/handleError";

export interface ModalContextProps {
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
  notificationTimeType: "minute" | "hour";
  setNotificationTimeType: (value: "minute" | "hour") => void;
  categorySelected: string;
  setCategorySelected: (value: string) => void;
  handleCreate(): Promise<void>
}

export const ModalContext = createContext<ModalContextProps>(
  {} as ModalContextProps
);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [mode, setMode] = useState<"task" | "goal">("task");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());
  const [endTime, setEndTime] = useState<Dayjs | null>(dayjs().add(1, "hour"));
  const [notification, setNotification] = useState<"sim" | "nao">("sim");
  const [notificationTimeType, setNotificationTimeType] = useState<"minute" | "hour">("minute");
  const [notificationTime, setNotificationTime] = useState<number>(30);
  const [goalWithoutDate, setGoalWithoutDate] = useState<boolean>(false);
  const [categorySelected, setCategorySelected] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);


  function handleOpen(mode: "task" | "goal" = "task") {
    setMode(mode);
    setOpen(true);
  }

  function handleClose() {
    setMode("task");
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

    const requestBody = {
      title,
      description,
      start_date: startDateISO,
      end_date: endDateISO,
      status: "PARCIALMENTE_EXECUTADA",
      category_id: categorySelected
    };
    
    await api.post("tasks", requestBody).then(() => {
      toast.success("Task criada com sucesso!");
    }).catch((err) => {
      handleError(err);
    }).finally(() => {
      setIsLoading(false);
    });
  }

  useEffect(() => {
    if (mode === "task") {
      setGoalWithoutDate(false);
    }
  }, [mode]);

  return (
    <ModalContext.Provider
      value={{
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
        handleCreate
      }}
    >
      {children}
      <Modal />
    </ModalContext.Provider>
  );
};
